import { useState } from 'react';

export interface HeaderProps { }

export default function Header({ }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Tech Stack" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-xl">terminal</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight">Angel Herrera Medina</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="text-base font-medium py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
