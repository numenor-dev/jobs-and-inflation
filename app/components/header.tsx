"use client";

export default function Header() {
    return (
        <header className="mx-auto flex flex-col sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            <h1 className="mt-28 text-center text-4xl md:text-5xl font-bold lg:text-6xl dark:text-zinc-300 px-5">US Jobs and Inflation Report</h1>
            <p className="sm:mx-auto mx-8 mt-7 mb-16 font-sans text-lg md:text-xl lg:max-w-3xl md:max-w-xl max-w-md lg:text-2xl dark:text-zinc-300">
                Layoff and job creations in the US since 2011 measured against the Consumer Price Index (CPI) and the value of the US dollar.
            </p>
        </header>
    );
}