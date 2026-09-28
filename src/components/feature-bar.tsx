export const FeatureBar = () => {
    return(
        // The card is lifted by half its own height, so its lower half sits on the slate band.
        <div className="bg-slate-800" id="overlay">
            <div className="page-container">
                <div className="relative z-10 mx-auto max-w-4xl -translate-y-1/2 grid gap-6 bg-white p-8 text-center font-bold shadow-xl shadow-black/40 sm:grid-cols-3">
                    <div>Family Owned <br /> and Operated!</div>
                    <div>Call (832)-988-6550 <br /> For a Quote Today!</div>
                    <div>Affordable Pricing <br /> Free Consultations!</div>
                </div>
            </div>
        </div>
    );
}
