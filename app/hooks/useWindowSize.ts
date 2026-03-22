import { useState, useEffect } from 'react';

export function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(
        () => typeof window !== 'undefined' ? window.innerWidth : 1024
    );

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => setWindowWidth(window.innerWidth), 150);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        windowWidth,
        isMobile: windowWidth < 768,
        isTablet: windowWidth < 1024,
    };
}