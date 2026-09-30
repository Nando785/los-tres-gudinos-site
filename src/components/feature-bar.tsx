export const FeatureBar = () => {
    return(
        // flow-root stops the card's negative margin from collapsing into the wrapper, so the card overlaps the hero while the wrapper stays put.
        <div className="flow-root bg-slate-800" id="overlay">
            <div className="page-container">
                <div className="relative z-10 mx-auto -mt-16 grid max-w-4xl gap-4 bg-white px-6 py-6 text-center font-bold shadow-xl shadow-black/40 sm:-mt-12 sm:grid-cols-3 sm:gap-6 sm:px-8 md:text-lg">
                    <div>Family Owned <br /> and Operated!</div>
                    <div>Call (832) 988-6550 <br /> For a Quote Today!</div>
                    <div>Affordable Pricing <br /> Free Consultations!</div>
                </div>
            </div>
        </div>
    );
}
