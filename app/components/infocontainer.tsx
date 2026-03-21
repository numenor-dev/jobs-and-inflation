'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MoreInfo from './moreinfo';

export default function InfoContainer() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useInView(ref, { once: true, amount: 0 });

    return (
        <div className="bg-slate-200 w-full">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="
                xl:max-w-7xl
                lg:max-w-5xl lg:px-10
                md:max-w-3xl md:px-4 md:py-6
                sm:max-w-xl
                px-10
                py-6
                rounded-xl
                mb-14
                mx-auto
            "
            >
                <MoreInfo />
            </motion.div>
        </div>
    );
}