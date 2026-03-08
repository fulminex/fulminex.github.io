import { socialLinks, siteOwner } from '../data/owner';
import ContactBanner from './ContactBanner';

const currentYear = new Date().getFullYear();

export interface FooterProps { }

export default function Footer({ }: FooterProps) {
    return (
        <footer className="mt-16 bg-slate-900 border-t border-slate-800">
            <ContactBanner />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined">terminal</span>
                    <span className="font-medium">{siteOwner.name}</span>
                </div>

                <div className="flex gap-6">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <span className="text-sm font-bold">GitHub</span>
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <span className="text-sm font-bold">LinkedIn</span>
                    </a>
                </div>

                <p className="text-slate-500 text-sm">
                    © {currentYear}. All rights reserved.
                </p>
            </div>
        </footer >
    );
}
