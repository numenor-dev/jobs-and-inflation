"use client";

export default function Header() {
    return (
        <header className="mx-auto flex flex-col sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            <h1 className="mx-8 mt-28 text-center text-5xl font-bold lg:text-7xl">US Jobs and Inflation Report</h1>
            <p className="mx-auto mt-12 mb-16 font-sans text-xl lg:max-w-4xl md:max-w-xl max-w-sm lg:text-3xl">
                Layoff and job creations in the US since 2011 measured against the Consumer Price Index (CPI) and the value of the US dollar.
            </p>
        </header>
    );
}