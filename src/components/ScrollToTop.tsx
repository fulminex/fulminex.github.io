import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
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
