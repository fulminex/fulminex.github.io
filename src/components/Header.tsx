export interface HeaderProps { }

export default function Header({ }: HeaderProps) {
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
                    <nav className="hidden md:flex gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">Experience</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Tech Stack</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
