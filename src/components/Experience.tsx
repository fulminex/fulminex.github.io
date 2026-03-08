import { experienceTimeline } from '../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="py-16 bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
                    <p className="text-slate-600 dark:text-slate-400">A timeline of technical leadership and milestone achievements.</p>
                </div>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                    {experienceTimeline.map((entry) => (
                        <div key={`${entry.company}-${entry.dateLabel}`} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group${entry.isCurrent ? ' is-active' : ''}`}>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${entry.isCurrent ? 'text-primary' : 'text-slate-400'}`}>
                                <span className="material-symbols-outlined text-[20px]">{entry.icon}</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-slate-900 dark:text-white">{entry.title}</h3>
                                    <span className={`text-xs font-medium px-2 py-1 rounded ${entry.isCurrent ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>{entry.dateLabel}</span>
                                </div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">{entry.company} • {entry.period}</div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                    {entry.description}
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {entry.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
