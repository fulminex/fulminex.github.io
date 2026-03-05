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

    // Custom smooth scroll implementation with interrupt support
    const scrollToTop = () => {
        const currentPos = window.scrollY;

        if (currentPos > 0) {
            window.scrollTo(0, currentPos - currentPos / 10);
            requestRef.current = window.requestAnimationFrame(scrollToTop);
        } else {
            // Stop animation when reaching the top
            if (requestRef.current) {
                window.cancelAnimationFrame(requestRef.current);
            }
        }
    };

    // Cancel scroll animation if user interacts (scrolls manually)
    const handleWheel = () => {
        if (requestRef.current) {
            window.cancelAnimationFrame(requestRef.current);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('touchmove', handleWheel, { passive: true });

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchmove', handleWheel);
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
