import { socialLinks, careerStart, isOpenForOpportunities } from '../data/mockData';
import { calculateYearsOfExperience } from '../utils/dateUtils';

export interface HeroProps { }

export default function Hero({ }: HeroProps) {
    return (
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
            </div>
            <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                        {isOpenForOpportunities && (
                            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-dark border border-slate-300 dark:border-slate-700 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Open for opportunities</span>
                            </div>
                        )}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                            Senior iOS
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-400">Engineering</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Technology Architect &amp; iOS Expert delivering robust, scalable mobile solutions since {careerStart.year}. Specialized in modern SwiftUI achitectures, high-performance computing, and crafting pixel-perfect Apple ecosystem experiences.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/25"
                            >
                                Get In Touch
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800 mt-4 text-center sm:text-left">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">{calculateYearsOfExperience()}+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">6+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Apps Shipped</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">17M+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Users Impacted</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-surface-dark group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark via-slate-900 to-indigo-950"></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-center opacity-30 select-none pointer-events-none font-mono text-sm leading-relaxed text-blue-300">
                                <div className="space-y-1">
                                    <div className="pl-0"><span className="text-purple-400">struct</span> <span className="text-yellow-300">Architecture</span>: <span className="text-green-300">System</span> {"{"}</div>
                                    <div className="pl-4"><span className="text-purple-400">var</span> core: <span className="text-purple-400">some</span> <span className="text-green-300">Module</span> {"{"}</div>
                                    <div className="pl-8"><span className="text-green-300">LibraryProvider</span> {"{"} component <span className="text-purple-400">in</span></div>
                                    <div className="pl-12"><span className="text-green-300">VStack</span>(alignment: .leading) {"{"}</div>
                                    <div className="pl-16"><span className="text-green-300">Text</span>(<span className="text-orange-300">"Scalability"</span>)</div>
                                    <div className="pl-20">.font(.largeTitle)</div>
                                    <div className="pl-20">.foregroundStyle(.primary)</div>
                                    <div className="pl-16">{"}"}</div>
                                    <div className="pl-16">.padding(.all, <span className="text-yellow-300">20</span>)</div>
                                    <div className="pl-12">{"}"}</div>
                                    <div className="pl-8">.optimized(<span className="text-green-300">Performance</span>.high)</div>
                                    <div className="pl-4">{"}"}</div>
                                    <div className="pl-0">{"}"}</div>
                                </div>
                            </div>
                            {/* Floating Cards - Scaled for Mobile */}
                            <div className="absolute top-1/4 -right-2 md:-right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl transform rotate-3 scale-75 md:scale-100 animate-[pulse_4s_ease-in-out_infinite] z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">A</div>
                                    <div>
                                        <div className="text-xs text-white font-bold">iOS Architect</div>
                                        <div className="text-[10px] text-white/60">System Design Expert</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-1/4 -left-2 md:-left-8 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl transform -rotate-2 scale-75 md:scale-100 animate-[pulse_4s_ease-in-out_infinite] z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-white font-bold">App Store Launch</div>
                                        <div className="text-[10px] text-white/60">Featured 3x</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
