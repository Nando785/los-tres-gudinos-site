import { Card, CardContent } from "@/components/ui/card";

import { ComparisonSlider } from "@/components/comparison-slider";
import { BrickSection } from "@/components/brick-section";
import { CoverageMap } from "@/components/layout/map";
import { HoursTable } from "@/components/hours-table";
import { FeatureBar } from "@/components/feature-bar";
import { EmailCard } from "@/components/email-card";
import { ServicesSection } from "@/components/services-section";
import { Review, ReviewSlider } from "@/components/review-slider";

export default function Home() {

    const services = [
        {
            name: "Construction or Installation",
            list: ["Driveway", "Interior Wall", "Retaining Wall", "Walkway or pathway", "Brick", "Concrete or cinder block", "Stamped Concrete", "Textured Concrete", "Exterior wall", "Patio, porch or terrace", "Steps", "Asphalt", "Concrete", "Gravel", "Stone"]
        },
        {
            name: "Masonry/concrete removal",
            list: []
        },
        {
            name: "Masonry/Concrete Repair",
            list: ["Driveway", "Interior Wall", "Retaining Wall", "Walkway or pathway", "Brick", "Concrete or cinder block", "Stamped Concrete", "Textured Concrete", "Exterior wall", "Patio, porch or terrace", "Steps", "Asphalt", "Concrete", "Gravel", "Stone"]
        },
        {
            name: "Masonry/Concrete Sealing",
            list: ["Driveway", "Interior wall", "Retaining wall", "Walkway or pathway", "Exterior wall", "Patio, porch or terrace", "Steps"]
        },
        {
            name: "Masonry/Concrete Staining",
            list: ["Driveway", "Interior wall", "Retaining wall", "Walkway or pathway", "Exterior wall", "Patio, porch or terrace", "Steps"]
        },
        {
            name: "Construction Design Services",
            list: ["Balcony", "New rooms", "Single-family home", "Deck", "Patio, porch or terrace", "Stairs"]
        },
        {
            name: "Patio, Porch or Terrace Construction and Installation",
            list: ["Asphalt", "Concrete", "Gravel", "Stone", "Brick", "Concrete or cinder block", "Stamped Concrete", "Textured Concrete"]
        },
        {
            name: "Remodeling",
            list: ["Bathroom", "Bedroom", "Common areas", "Kitchen", "Garage", "Laundry Room"]
        },
        {
            name: "Structural Repair",
            list: ["Beams or lintels", "Frame", "Posts", "Walls", "Foundation", "Joists", "Roof frame"]
        },
        {
            name: "Miscellaneous",
            list: ["Fireplace and firepit masonry", "Balcony addition", "Deck construction", "Single-family home construction", "Stairway addition"]
        }
    ];

    const reviews: Review[] = [
        {
            name: "Bobby T.",                          // required
            text: "Very Professional! Always on time. Built a small wall around the back of my house to help with water control, very satisfied with work and workers. Cleaned up everything when done. Looks great! Will use again on other projects.", // required
            rating: 5,                                // optional, 1–5 stars
            service: "Masonry/Concrete Repair",       // optional, shown as a small tag
        },
        {
            name: "Annice I.",
            text: "I am building a new residential house. This company saved me after another contractor left the project unfinished...they gave me a fair price and did an outstanding job!",
            rating: 4,
            service: "Residential Construction"
        },
        {
            name: "Martin G.",
            text: "Great work very efficient, completed my patio pavers in 2 days with an excellent result, good price provided for the overall work.",
            rating: 5,
            service: "Patio Construction and Installation",
        },
        {
            name: "Misty G.",
            text: "Professional, organized, and knowledgeable. Showed up early each day, took great care in protecting surrounding areas of our home to prevent any damage or unnecessary mess. The stone work looks fantastic, and we plan to use them again.",
            rating: 5,
            service: "Construction and Installation",
        },
        {
            name: "Sandra H.",
            text: "Mr. Eduardo and his crew were very professional. They were very early and finished my concrete patio within the time frame he told me. I recommend him for his great quality work. Very Satisfied.",
            rating: 5,
            service: "Patio Construction and Installation",
        },
        {
            name: "Luisa J.",
            text: "3 Gudinos were very professional. I had them built a brick patio. They explained the options and handled all details timely; including initial meeting and quote. When it came time to start the job everything was completed on schedule. They cleaned up after themselves and left everything in good shape. Payment was easy. I definitely recommend Los Tres Gudinos.",
            rating: 5,
        },
    ];

  return (
    <div>
        {/* Title */}
        <div className="page-container flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center gap-3 pb-24 text-center text-white md:gap-4" id="title">
            <h1 className="font-khand text-5xl leading-none font-bold sm:text-6xl md:text-7xl lg:text-8xl">LOS TRES GUDINOS</h1>
            <p className="text-lg tracking-widest sm:text-xl md:text-2xl">CONSTRUCTING YOUR FUTURE</p>
        </div>

        <FeatureBar />

        {/* Projects Section */}
        <section className="section-y bg-slate-800" id="projects">
            <div className="page-container">
                <h2 className="section-title text-white">Our Past Projects</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
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
            <ServicesSection services={services} />
        </BrickSection>

        <section className="section-y" id="about">
            <div className="page-container">
                <h2 className="section-title text-white">About Our Business</h2>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <Card>
                        <CardContent className="space-y-4 text-base leading-relaxed md:px-8">
                            <h3 className="block-title">Established in 2005</h3>
                            <p><i>Los Tres Gudinos Masonry Contractors</i> was founded over 15 years ago by a father-and-family team with a passion for craftsmanship and a commitment to quality. Starting as a small operation in Houston, we focused on stone and brick installations, quickly earning a reputation for attention to detail and reliability. As our business grew, so did our services, expanding to include stucco, crack repairs, waterproofing, and custom outdoor projects.</p>
                            <p>Throughout the years, we&apos;ve remained true to our core values of honesty, integrity, and exceptional craftsmanship. Today, Los Tres Gudinos is known for delivering beautiful, durable masonry work that enhances every property we touch.</p>
                            <p>We’re proud to be a family-owned business that treats every project with the care it deserves, continuing a tradition of excellence that has made us a trusted name in Houston.</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardContent className="text-base md:px-8">
                            <ReviewSlider reviews={reviews} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="section-y bg-stone-700" id="contact">
            <div className="page-container text-white">
                <h2 className="section-title">Contact Us</h2>
                <EmailCard companyEmail={process.env.COMPANY_EMAIL} />
            </div>
        </section>

        {/* Hours & Location */}
        <section className="section-y bg-white" id="hours">
            <div className="page-container">
                <h2 className="section-title">Location & Hours</h2>

                <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                    <CoverageMap />
                    <div className="space-y-4">
                        <h3 className="block-title">Hours of Operation</h3>
                        <HoursTable />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
