"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type Review = {
  name: string;
  text: string;
  rating?: number; // 1–5
  location?: string;
  service?: string;
};

type ReviewSliderProps = {
  reviews: Review[];
  /** Time each slide stays on screen, in ms */
  interval?: number;
  title?: string;
  className?: string;
};

export function ReviewSlider({
  reviews,
  interval = 5000,
  title = "What our customers say",
  className,
}: ReviewSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  // Respect the visitor's "reduce motion" setting: no auto-cycling for them
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const plugins = React.useMemo(
    () =>
      reduceMotion
        ? []
        : [
            Autoplay({
              delay: interval,
              stopOnInteraction: false, // keep cycling after a swipe/click
              stopOnMouseEnter: true, // pause while hovered so people can read
            }),
          ],
    [reduceMotion, interval]
  );

  // Track the current slide for the dot indicators
  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnapCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const goTo = (index: number) => {
    api?.scrollTo(index);
    api?.plugins()?.autoplay?.reset(); // restart the timer after a manual jump
  };

  if (reviews.length === 0) return null;

  return (
    <div className={cn("mx-auto w-full max-w-3xl", className)}>
      <h3 className="block-title mb-6">{title}</h3>

      <Carousel
        setApi={setApi}
        plugins={plugins}
        opts={{ align: "start", loop: true }}
        // Side padding leaves room for the arrows, which sit just outside the carousel.
        className="md:mx-12"
      >
        <CarouselContent>
          {reviews.map((review, i) => (
            <CarouselItem key={`${review.name}-${i}`}>
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {snapCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === selected}
              className={cn(
                "h-2 rounded-full transition-all",
                i === selected
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        {review.rating != null && <Stars rating={review.rating} />}

        <blockquote className="flex-1 text-base leading-relaxed text-muted-foreground">
            “{review.text}”
        </blockquote>

        <footer className="flex items-end justify-between gap-3">
          <div>
            <p className="font-medium">{review.name}</p>
            {review.location && (
              <p className="text-sm text-muted-foreground">{review.location}</p>
            )}
          </div>
          {review.service && (
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {review.service}
            </span>
          )}
        </footer>
      </CardContent>
    </Card>
  );
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(Math.min(Math.max(rating, 0), 5));
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${rounded} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < rounded
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

/*
Usage — replace with your real customer reviews:

const reviews: Review[] = [
  {
    name: "Customer name",
    location: "City",
    rating: 5,
    service: "Masonry/Concrete Repair",
    text: "Review text goes here.",
  },
  // ...
];

<ReviewSlider reviews={reviews} interval={6000} />
*/