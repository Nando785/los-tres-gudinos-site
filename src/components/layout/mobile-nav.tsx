"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/site";

export const MobileNav = () => {
    const [open, setOpen] = useState(false);
    // The sheet locks page scrolling until its close animation finishes, so jumping to a section
    // straight from the click gets undone. Remember the target and scroll once the sheet is gone.
    const pendingHash = useRef<string | null>(null);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Open menu">
                    <Menu className="size-6" />
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="gap-0 p-6 pt-16"
                onCloseAutoFocus={(e) => {
                    const hash = pendingHash.current;
                    if (!hash) return;
                    pendingHash.current = null;
                    e.preventDefault(); // don't pull focus back to the menu button
                    document.querySelector(hash)?.scrollIntoView();
                    history.pushState(null, "", hash);
                }}
            >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="flex flex-col">
                    {[...navLinks, { href: "#contact", label: "Contact Us" }].map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="border-b py-4 text-lg font-semibold"
                            onClick={(e) => {
                                e.preventDefault();
                                pendingHash.current = link.href;
                                setOpen(false);
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};
