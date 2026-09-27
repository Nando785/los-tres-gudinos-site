"use client";

import { Button } from "@/components/ui/button";

export const SiteHeader = () => {
  return (
    <header className="border-b bg-white">
        <div className="flex items-center justify-between w-full p-5">

            <div className="flex flex-col justify-center items-center gap-2">
                <img 
                src="/images/logo.jpg"
                alt="Los Tres Gudinos"
                className="h-8 w-8"
                />
                <h1 className="text-xl font-bold">Los Tres Gudinos</h1>
            </div>

            <div className="flex flex-row justify-center items-center gap-2 font-roboto">
                <a href="#about" className="font-bold mx-5">About</a>
                <a href="#services" className="font-bold mx-5">Services</a>
                <a href="#contact" className="font-bold mx-5">Contact</a>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Button>Contact</Button>
            </div>
        </div>
    </header>
  );
};
