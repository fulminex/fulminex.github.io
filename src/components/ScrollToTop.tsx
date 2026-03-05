import { useState, useEffect, useRef } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const requestRef = useRef<number | null>(null);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Time-based smooth scrolling optimized for Safari/iOS
    const scrollToTop = () => {
        const startPosition = window.scrollY;
        const duration = 600; // ms to scroll to top (adjustable)
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            // Cap progress to 1
            const progress = Math.min(timeElapsed / duration, 1);

            // Ease-out Quart curve for a natural slow-down at the top
            const ease = 1 - Math.pow(1 - progress, 4);

            window.scrollTo(0, startPosition * (1 - ease));

            if (timeElapsed < duration) {
                requestRef.current = window.requestAnimationFrame(animation);
            }
        };

        // Cancel any existing animation before starting a new one
        if (requestRef.current) {
            window.cancelAnimationFrame(requestRef.current);
        }

        requestRef.current = window.requestAnimationFrame(animation);
    };

    // Cancel scroll animation if user interacts (scrolls manually)
    const handleInterrupt = () => {
        if (requestRef.current) {
            window.cancelAnimationFrame(requestRef.current);
            requestRef.current = null;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        // Listeners to stop animation if user touches/scrolls during the ascent
        window.addEventListener('wheel', handleInterrupt, { passive: true });
        window.addEventListener('touchstart', handleInterrupt, { passive: true });
        window.addEventListener('touchmove', handleInterrupt, { passive: true });

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('wheel', handleInterrupt);
            window.removeEventListener('touchstart', handleInterrupt);
            window.removeEventListener('touchmove', handleInterrupt);

            if (requestRef.current) {
                window.cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 hover:bg-primary backdrop-blur-lg border border-primary/30 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-90"
                aria-label="Scroll to top"
            >
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-y-1">
                    arrow_upward
                </span>
            </button>
        </div>
    );
}
