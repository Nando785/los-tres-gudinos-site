"use client";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navLinks } from "@/lib/site";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
        <div className="page-container flex h-16 items-center justify-between gap-6">

            <a href="#title" className="flex items-center gap-3">
                <img
                src="/images/logo.jpg"
                alt=""
                className="size-9 rounded"
                />
                <span className="font-khand text-xl font-bold leading-none">Los Tres Gudinos</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-2">
                <Button asChild size="lg" className="hidden sm:inline-flex">
                    <a href="#contact">Contact Us</a>
                </Button>
                <MobileNav />
            </div>
        </div>
    </header>
  );
};
