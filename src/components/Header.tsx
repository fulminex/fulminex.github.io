import { useEffect, useRef, useState } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';
import { navLinks } from '../data/navigation';
import { siteOwner } from '../data/owner';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const close = () => setIsMenuOpen(false);
        window.addEventListener('header:close', close);
        return () => window.removeEventListener('header:close', close);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const offset = headerRef.current?.offsetHeight ?? 64;
        smoothScrollTo(href, offset);
        setIsMenuOpen(false);
    };

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-xl">terminal</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight">{siteOwner.name}</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors"
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors overflow-hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute inset-0 material-symbols-outlined transition-all duration-300 transform ${isMenuOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
                                }`}>
                                menu
                            </span>
                            <span className={`absolute inset-0 material-symbols-outlined transition-all duration-300 transform ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
                                }`}>
                                close
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-64 opacity-100 border-t border-slate-200 dark:border-slate-800'
                    : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col p-4 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className="text-base font-medium py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
