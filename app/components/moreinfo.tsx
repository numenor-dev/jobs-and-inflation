'use client';

import { motion } from "motion/react";
import { ReactNode } from "react";

type WhyMatters = {
    title: string
    body: ReactNode
}[]

type WhyInflation = {
    title: string
    body: ReactNode
    source: {
        label: string
        href: string
    }
}[]


const indicators = [
    {
        num: "01",
        title: "Job layoffs",
        body: "This line shows the total number of layoffs each year based on Bureau of Labor Statistics (BLS) data. Higher points represent years when more people lost jobs, often coinciding with major economic downturns (e.g., recessions, market corrections, global events)."
    },
    {
        num: "02",
        title: "Job creations",
        body: "This line represents the total number of new jobs added each year. Tracking job creation alongside layoffs gives a clearer picture of whether the labor market is expanding or contracting."
    },
    {
        num: "03",
        title: "Consumer Price Index (CPI), normalized",
        body: "The CPI line reflects inflation, showing how the cost of goods and services has changed over time. The values are normalized between 0 and 1 so it can be displayed here alongside the job data. A rising CPI indicates increasing inflation."
    },
    {
        num: "04",
        title: "Dollar Value",
        body: "This line tracks the relative strength of the U.S. dollar using CPI values, with 2011 set as the baseline. Values above 1 mean the dollar was stronger than in 2011; values below 1 mean it lost value."
    }
];

const whyMatters: WhyMatters = [
    {
        title: "Layoffs vs. creations",
        body: "Comparing both shows whether the economy is gaining or losing overall employment. If job creation is equal to or less than job layoffs, it indicates a shrinking job market and underlying economic issues."
    },
    {
        title: "Inflation's role",
        body: (
            <>
                CPI helps illustrate the true mathematical level of{" "}
                <a href="https://www.bls.gov/data/inflation_calculator.htm" className="underline text-red-700 dark:text-red-500/90 text-sm">
                    inflation
                </a>
                , which affects purchasing power. Even if jobs are created, high inflation will counteract real income and savings. If a person received an annual raise of 4% but inflation is at 6%, their real income effectively decreased by 2%.
            </>
        )
    },
    {
        title: "Dollar value",
        body: "Measuring the dollar value over time shows how much purchasing power an individual has lost. Since 2011, the U.S. dollar has lost roughly 30–35% of its purchasing power — $100 in 2011 is worth about $65 today."
    }
];

const whyInflation: WhyInflation = [
    {
        title: "Excessive money creation by central banks",
        body: "When the total amount of money grows faster than the production of goods and services, more dollars compete for the same amount of goods. Since 2011, over $10 trillion has been created physically and digitally — it took over 200 years to create the first $12 trillion.",
        source: { label: "Federal Reserve Economic Data (FRED)", href: "https://fred.stlouisfed.org/series/M2SL" }
    },
    {
        title: "Increased government spending",
        body: "High amounts of government spending can force the government to borrow when it exceeds revenue earned that year. This contributes to inflation and higher overall debt.",
        source: { label: "MIT Sloan School of Management", href: "https://mitsloan.mit.edu/ideas-made-to-matter/federal-spending-was-responsible-2022-spike-inflation-research-shows" }
    },
    {
        title: "Tariffs and trade restrictions",
        body: "Tariffs raise the cost of imported goods and raw materials. Businesses pass these higher costs on to consumers, increasing prices across multiple industries.",
        source: { label: "Federal Reserve Bank of San Francisco", href: "https://www.frbsf.org/research-and-insights/publications/economic-letter/2025/05/effects-of-tariffs-on-inflation-and-production-costs/" }
    },
    {
        title: "Wars",
        body: "Wars disrupt global supply chains, reduce production, increase energy and food costs, and require significant government spending — these combined pressures often lead to higher inflation both domestically and globally.",
        source: { label: "University of Gothenburg", href: "https://www.gu.se/en/news/war-and-conflict-often-lead-to-high-inflation" }
    }
];

function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center gap-3 mt-16 mb-6">
            <span className="block w-1 h-6 rounded-full" />
            <h2 className="font-sans font-semibold text-xl tracking-tight text-zinc-800 dark:text-zinc-200">{children}</h2>
        </div>
    );
}

export default function MoreInfo() {
    return (
        <div className="flex flex-col max-w-5xl mx-auto px-4">

            {/* Animated header */}
            <motion.h1
                className="relative lg:max-w-7xl md:max-w-2xl max-w-sm mx-auto p-3 font-sans font-extrabold rounded-md text-3xl mt-7 overflow-hidden"
            >
                <motion.span
                    initial={{ scaleX: 0, y: 2, rotate: -0.8 }}
                    animate={{ scaleX: 1, y: [2, -1, 1, 0], rotate: [-0.5, 0.3, -0.2, 0] }}
                    transition={{
                        scaleX: { duration: 1.6, ease: "easeOut" },
                        y: { duration: 1.6, ease: "easeInOut" },
                        rotate: { duration: 1.6, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 bg-emerald-500/50 dark:bg-emerald-400/30 rounded-2xl"
                    style={{ transformOrigin: "left" }}
                />
                <span className="relative z-10 dark:text-zinc-300/80">
                    This chart visualizes four major economic indicators in the US from 2011 to 2026:
                </span>
            </motion.h1>

            {/* Indicator cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {indicators.map((item, i) => (
                    <motion.div
                        key={item.num}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                        className="relative rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-700/50 p-5 overflow-hidden"
                    >
                        <span className="absolute top-2 right-3 font-sans font-black text-3xl text-zinc-200 dark:text-zinc-700 select-none leading-none">
                            {item.num}
                        </span>
                        <h3 className="font-sans font-semibold text-lg mb-2 relative z-10 pr-10 dark:text-zinc-200">{item.title}</h3>
                        <p className="font-sans text-base text-zinc-600 dark:text-zinc-300/80 leading-relaxed relative z-10">{item.body}</p>
                    </motion.div>
                ))}
            </div>

            {/* Why they matter */}
            <SectionLabel>Why do these indicators matter together?</SectionLabel>
            <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden">
                {whyMatters.map((item) => (
                    <div key={item.title} className="px-5 py-4 bg-zinc-50 dark:bg-zinc-800/80">
                        <h3 className="font-sans font-semibold text-lg text-zinc-800 dark:text-zinc-300 mb-1">{item.title}</h3>
                        <p className="font-sans text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">{item.body}</p>
                    </div>
                ))}
            </div>

            {/* Why inflation occurs */}
            <SectionLabel>Why does inflation even occur?</SectionLabel>
            <div className="flex flex-col gap-4">
                {whyInflation.map((item) => (
                    <div key={item.title} className="pl-4 border-l-2 border-emerald-400/80 dark:border-emerald-500">
                        <h3 className="font-sans font-semibold text-lg mb-1 dark:text-zinc-300">{item.title}</h3>
                        <p className="font-sans text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">{item.body}</p>
                        {item.source && (
                            <a
                            
                                href={item.source.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-1 text-sm text-sky-600 dark:text-sky-400 hover:underline"
                            >
                                {item.source.label}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}