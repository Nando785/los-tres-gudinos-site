"use client";

import { Card } from "@/components/ui/card";

import { ComparisonSlider } from "@/components/comparison-slider";
import { BrickSection } from "@/components/brick-section";
import { ServicesCard } from "@/components/services-card";
import { CoverageMap } from "@/components/layout/map";
import { HoursTable } from "@/components/hours-table";
import { FeatureBar } from "@/components/feature-bar";

export default function Home() {
    
  return (
    <div>
        {/* Title */}
        <div className="w-full min-h-svh bg-white/0 flex flex-col justify-center items-center text-white" id="title">
            <div className="text-5xl font-bold font-khand">LOS TRES GUDINOS</div>
            <div className="text-2xl">CONSTRUCTING YOUR FUTURE</div>
        </div>

        <FeatureBar />

        {/* Projects Section */}
        <div className="w-full bg-slate-800"  id="projects">
            <div className="flex justify-around w-full">
                <h1 className="text-3xl font-bold p-5 text-white font-khand">Our Past Projects</h1>
            </div>

            <div className="flex flex-row justify-around">
                <ComparisonSlider beforeFileName="/construction-projects/garage-facade-before" afterFileName="/construction-projects/garage-facade-after" />
                <ComparisonSlider beforeFileName="/construction-projects/wall-crack-before" afterFileName="/construction-projects/wall-crack-after" />
            </div>
        </div>

        {/* Spacer */}
        <div className="w-full h-[100px] bg-slate-800"></div>
        
        <BrickSection id="services">
            <ServicesCard />
        </BrickSection>

        {/* Spacer */}
        <div className="w-full h-[100px] bg-white/0"></div>
        
        <div className="flex flex-col justify-center items-center w-full p-5" id="about">
            <h1 className="text-white text-3xl font-bold font-khand p-5"> About our business </h1>
            <div className="flex flex-row justify-around w-full">
                <Card className="flex flex-col justify-center items-center w-[550px] p-5 font-roboto">
                    Established in 2005.
                    <br />
                    &emsp; Los Tres Gudinos Masonry Contractors was founded over 15 years ago by a father-and-family team with a passion for craftsmanship and a commitment to quality. Starting as a small operation in Houston, we focused on stone and brick installations, quickly earning a reputation for attention to detail and reliability. As our business grew, so did our services, expanding to include stucco, crack repairs, waterproofing, and custom outdoor projects. <br /> &emsp; Throughout the years, we've remained true to our core values of honesty, integrity, and exceptional craftsmanship. Today, Los Tres Gudinos is known for delivering beautiful, durable masonry work that enhances every property we touch. <br /> &emsp; We’re proud to be a family-owned business that treats every project with the care it deserves, continuing a tradition of excellence that has made us a trusted name in Houston.
                </Card>
                <div>
                    CUSTOMER REVIEWS
                </div>
            </div>
        </div>

        <div className="w-full h-[250px] bg-stone-700" id="contact">
            GET IN TOUCH
        </div>

        {/* Hours & Location */}
        <div className="w-full bg-white py-16 md:py-24" id="hours">
            <div className="flex justify-around w-full">
                <h1 className="text-3xl font-bold p-5 font-khand">Location & Hours</h1>
            </div>

            <div className="flex flex-row items-center justify-around w-full">
                <CoverageMap />
                <div>
                    <div>Hours of Operation</div>
                    <HoursTable />
                </div>
            </div>
        </div>
    </div>
  );
}
