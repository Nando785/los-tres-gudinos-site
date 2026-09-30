"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A section with a brick-wall background whose top and bottom edges are ragged:
 * some bricks stick out past the section into its neighbours.
 *
 * Usage:
 *   <BrickSection overhang={2} seed={4}>
 *     ...your content...
 *   </BrickSection>
 */

type Brick = {
  key: string
  x: number
  y: number
  color: string
  overhang: boolean
}

export type BrickSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Max number of courses (brick rows) that can stick out, top and bottom. 0–3. */
  overhang?: number
  /** Change this for a different edge pattern. The same seed always gives the same pattern. */
  seed?: number
  /** Brick size in px, without mortar. */
  brickWidth?: number
  brickHeight?: number
  /** Mortar joint thickness in px. */
  mortar?: number
  /** Chance that a brick appears 1, 2 and 3 courses out. */
  odds?: number[]
  /** Brick colours, picked per brick. */
  colors?: string[]
  /** Mortar colour, also used as the section background. */
  mortarColor?: string
  /** Classes for the wrapper around your content (e.g. max width). */
  contentClassName?: string
}

const DEFAULT_COLORS = [
  "#9c4a33",
  "#a8543a",
  "#8e3f2b",
  "#b05e42",
  "#963f2e",
  "#a14b35",
  "#7f3a28",
]
const DEFAULT_ODDS = [0.55, 0.35, 0.2]

// useLayoutEffect avoids a flash of the unsized wall, but warns during SSR on older React.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

/** Deterministic "random" number in [0, 1) per brick, so resizing doesn't reshuffle the edge. */
function hashRandom(seed: number, row: number, col: number, salt: number) {
  let h =
    Math.imul(seed, 2654435761) ^
    Math.imul(row, 374761393) ^
    Math.imul(col, 668265263) ^
    Math.imul(salt, 1442695041)
  h = Math.imul(h ^ (h >>> 15), 2246822519)
  h = Math.imul(h ^ (h >>> 13), 3266489917)
  h ^= h >>> 16
  return (h >>> 0) / 4294967296
}

function buildBricks(opts: {
  width: number
  rows: number
  unit: number
  course: number
  overhang: number
  seed: number
  odds: number[]
  colors: string[]
}): Brick[] {
  const { width, rows, unit, course, overhang, seed, odds, colors } = opts
  const topPad = overhang * course
  const bricks: Brick[] = []
  const present = new Map<number, Set<number>>() // row -> x positions of bricks in it

  // Bottom overhang rows are keyed by distance from the edge, so they stay put when the height changes.
  const rowKey = (r: number) => (r >= rows ? 10000 + (r - rows) : r)

  // Odd rows shift half a brick (running bond).
  const bricksInRow = (r: number) => {
    const offset = ((r % 2) + 2) % 2 ? -unit / 2 : 0
    const list: [x: number, col: number][] = []
    for (let c = 0; c * unit + offset < width; c++) list.push([c * unit + offset, c])
    return list
  }

  const place = (r: number, x: number, c: number, isOverhang: boolean) => {
    if (!present.has(r)) present.set(r, new Set())
    present.get(r)!.add(x)
    bricks.push({
      key: `${r}:${c}`,
      x,
      y: topPad + r * course,
      color: colors[Math.floor(hashRandom(seed, rowKey(r), c, 1) * colors.length)],
      overhang: isOverhang,
    })
  }

  // 1. Fill the section itself.
  for (let r = 0; r < rows; r++) {
    for (const [x, c] of bricksInRow(r)) place(r, x, c, false)
  }

  // 2. Add overhang courses, working outward. A brick is only allowed if it rests
  //    on at least one brick in the course nearer the section (no floating bricks).
  for (let d = 1; d <= overhang; d++) {
    const pairs: [row: number, inner: number][] = [
      [-d, -d + 1],
      [rows - 1 + d, rows - 2 + d],
    ]
    for (const [r, inner] of pairs) {
      const support = present.get(inner)
      if (!support) continue
      for (const [x, c] of bricksInRow(r)) {
        const supported = support.has(x - unit / 2) || support.has(x + unit / 2)
        if (supported && hashRandom(seed, rowKey(r), c, 2) < (odds[d - 1] ?? 0)) {
          place(r, x, c, true)
        }
      }
    }
  }

  return bricks
}

export function BrickSection({
  overhang = 2,
  seed = 1,
  brickWidth = 60,
  brickHeight = 20,
  mortar = 4,
  odds = DEFAULT_ODDS,
  colors = DEFAULT_COLORS,
  mortarColor = "#cfc4b3",
  className,
  contentClassName,
  style,
  children,
  ...props
}: BrickSectionProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [size, setSize] = React.useState({ width: 0, height: 0 })

  const unit = brickWidth + mortar // horizontal repeat
  const course = brickHeight + mortar // vertical repeat (one course)
  const overhangPx = overhang * course

  // Measure the section width and the content's natural height, then round the height
  // up to whole courses so the bottom course isn't cut in half.
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const measure = () => {
      const cs = getComputedStyle(section)
      const natural =
        content.offsetHeight + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)
      const height = Math.ceil(natural / course) * course
      const width = section.clientWidth
      setSize((prev) =>
        prev.width === width && prev.height === height ? prev : { width, height }
      )
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(section) // width changes
    observer.observe(content) // content height changes
    return () => observer.disconnect()
  }, [course])

  const rows = size.height / course

  const bricks = React.useMemo(
    () =>
      size.width > 0
        ? buildBricks({ width: size.width, rows, unit, course, overhang, seed, odds, colors })
        : [],
    [size.width, rows, unit, course, overhang, seed, odds, colors]
  )

  return (
    <section
      ref={sectionRef}
      className={cn(
        // z-10 puts the overhang above neighbouring sections;
        // isolate keeps the wall's -z-10 local, behind the content.
        "relative isolate z-10 section-y",
        className
      )}
      style={{
        backgroundColor: mortarColor,
        height: size.height || undefined,
        ...style,
      }}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 -z-10 drop-shadow-[0_4px_4px_rgb(0_0_0/0.35)]"
        style={{ top: -overhangPx }}
        width={size.width}
        height={size.height + 2 * overhangPx}
      >
        {bricks.map((b) => (
          <React.Fragment key={b.key}>
            {/* Protruding bricks carry their own mortar, since there's no section background behind them. */}
            {b.overhang && (
              <rect x={b.x} y={b.y} width={unit} height={course} fill={mortarColor} />
            )}
            <rect
              x={b.x + mortar / 2}
              y={b.y + mortar / 2}
              width={brickWidth}
              height={brickHeight}
              rx={1.5}
              fill={b.color}
            />
          </React.Fragment>
        ))}
      </svg>

      <div ref={contentRef} className={cn("page-container relative", contentClassName)}>
        {children}
      </div>
    </section>
  )
}
