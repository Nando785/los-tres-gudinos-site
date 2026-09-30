"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Requires: npx shadcn@latest add tabs badge select

type Service = {
  name: string;
  list: string[];
  description?: string; // optional, e.g. for "Masonry/concrete removal"
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Treat placeholder lists like ["Yes"] as "no sub-items"
const hasItems = (s: Service) =>
  s.list.length > 0 && !(s.list.length === 1 && s.list[0].toLowerCase() === "yes");

export function ServicesSection({ services }: { services: Service[] }) {
  const [active, setActive] = useState(slug(services[0].name));

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 rounded-2xl bg-taupe-300">
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">Our services</h2>

      <Tabs
        value={active}
        onValueChange={setActive}
        orientation="vertical"
        className="flex flex-col gap-6 md:flex-row"
      >
        {/* Mobile: compact picker */}
        <div className="md:hidden">
          <Select value={active} onValueChange={setActive}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.name} value={slug(s.name)}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop: vertical list of services */}
        <TabsList className="hidden h-auto w-72 shrink-0 flex-col items-stretch gap-1 bg-transparent p-0 md:flex">
          {services.map((s) => (
            <TabsTrigger
              key={s.name}
              value={slug(s.name)}
              className="justify-between gap-3 whitespace-normal rounded-md px-3 py-2 text-left 
                hover:bg-muted/80
                data-[state=active]:bg-muted/60 
                data-[state=active]:shadow-none 
                data-[state=active]:shadow-xl 
                data-[state=active]:shadow-black/30"
            >
              <span>{s.name}</span>
              {hasItems(s) && (
                <span className="text-xs tabular-nums text-muted-foreground">
                  {s.list.length}
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Detail panel: only one service shown at a time */}
        <div className="min-w-0 flex-1">
          {services.map((s) => (
            <TabsContent
              key={s.name}
              value={slug(s.name)}
              className="mt-0 rounded-lg bg-black/5 p-6 h-full"
            >
              <h3 className="mb-2 text-xl font-medium">{s.name}</h3>
              {s.description && (
                <p className="mb-4 text-muted-foreground">{s.description}</p>
              )}
              {hasItems(s) && (
                <div className="flex flex-wrap gap-2">
                  {s.list.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-[#963f2e] rounded text-white">
                      {item}
                    </Badge>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <div className="mt-5 text-sm text-muted-foreground">
        <i> Don't see what you need? Contact us to see if we can help. </i>
      </div>
    </section>
  );
}
