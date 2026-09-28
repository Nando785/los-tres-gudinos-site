"use client";

import { Card, CardContent } from "@/components/ui/card";

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
        <div className="page-container min-h-svh flex flex-col justify-center items-center gap-4 text-center text-white" id="title">
            <div className="text-5xl md:text-7xl font-bold font-khand">LOS TRES GUDINOS</div>
            <div className="text-xl md:text-2xl">CONSTRUCTING YOUR FUTURE</div>
        </div>

        <FeatureBar />

        {/* Projects Section */}
        <section className="bg-slate-800 pb-16 md:pb-24" id="projects">
            <div className="page-container">
                <h2 className="section-title text-white">Our Past Projects</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <ComparisonSlider beforeFileName="/construction-projects/garage-facade-before" afterFileName="/construction-projects/garage-facade-after" />
                    <ComparisonSlider beforeFileName="/construction-projects/wall-crack-before" afterFileName="/construction-projects/wall-crack-after" />
                    <ComparisonSlider beforeFileName="/construction-projects/shed-facade-before" afterFileName="/construction-projects/shed-facade-after" />
                    <ComparisonSlider beforeFileName="/construction-projects/burnt-sign-before" afterFileName="/construction-projects/burnt-sign-after" />
                    <ComparisonSlider beforeFileName="/construction-projects/concrete-fence-before" afterFileName="/construction-projects/concrete-fence-after" />
                    <ComparisonSlider beforeFileName="/construction-projects/stone-platform-before" afterFileName="/construction-projects/stone-platform-after" />
                </div>
            </div>
        </section>

        <BrickSection id="services">
            <ServicesCard />
        </BrickSection>

        <section className="section-y" id="about">
            <div className="page-container">
                <h2 className="section-title text-white">About Our Business</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardContent className="space-y-4 font-roboto text-base">
                            <p className="font-bold">Established in 2005.</p>
                            <p><i>Los Tres Gudinos Masonry Contractors</i> was founded over 15 years ago by a father-and-family team with a passion for craftsmanship and a commitment to quality. Starting as a small operation in Houston, we focused on stone and brick installations, quickly earning a reputation for attention to detail and reliability. As our business grew, so did our services, expanding to include stucco, crack repairs, waterproofing, and custom outdoor projects.</p>
                            <p>Throughout the years, we&apos;ve remained true to our core values of honesty, integrity, and exceptional craftsmanship. Today, Los Tres Gudinos is known for delivering beautiful, durable masonry work that enhances every property we touch.</p>
                            <p>We’re proud to be a family-owned business that treats every project with the care it deserves, continuing a tradition of excellence that has made us a trusted name in Houston.</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardContent className="space-y-4 font-roboto text-base">
                            REVIEWS HERE
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="section-y bg-stone-700" id="contact">
            <div className="page-container text-white">
                GET IN TOUCH
            </div>
        </section>

        {/* Hours & Location */}
        <section className="section-y bg-white" id="hours">
            <div className="page-container">
                <h2 className="section-title">Location & Hours</h2>

                <div className="grid items-center gap-8 md:grid-cols-2">
                    <CoverageMap />
                    <div className="space-y-4">
                        <h3 className="font-khand text-2xl font-bold">Hours of Operation</h3>
                        <HoursTable />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
