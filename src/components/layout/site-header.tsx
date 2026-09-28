"use client";

import { Button } from "@/components/ui/button";

export const SiteHeader = () => {
  return (
    <header className="border-b bg-white">
        <div className="page-container flex items-center justify-between gap-8 py-4">

            <div className="flex flex-col justify-center items-center gap-2">
                <img
                src="/images/logo.jpg"
                alt="Los Tres Gudinos"
                className="size-8"
                />
                <h1 className="text-xl font-bold">Los Tres Gudinos</h1>
            </div>

            <nav className="flex flex-row justify-center items-center gap-8 font-roboto font-bold">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="flex flex-col justify-center items-center gap-2">
                <Button>Contact</Button>
            </div>
        </div>
    </header>
  );
};
