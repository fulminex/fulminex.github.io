export interface SkillsProps { }

export default function Skills({ }: SkillsProps) {
    return (
        <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">Technical Arsenal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-blue-500 text-3xl">developer_mode</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Development</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                <span className="text-slate-600 dark:text-slate-300">Swift &amp; Objective-C</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                <span className="text-slate-600 dark:text-slate-300">SwiftUI &amp; UIKit</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                <span className="text-slate-600 dark:text-slate-300">Combine &amp; Async/Await</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                <span className="text-slate-600 dark:text-slate-300">Core Data / SwiftData</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-purple-500 text-3xl">architecture</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Architecture &amp; QA</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300">MVVM-C</span>
                            <span className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300">VIPER</span>
                            <span className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300">XCTest</span>
                            <span className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300">Snapshot Testing</span>
                            <span className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300">Clean Architecture</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                            Strong advocate for modularization and testable code. Experienced in setting up scalable architectures for large teams.
                        </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-green-500 text-3xl">build_circle</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tools &amp; CI/CD</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Fastlane</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GitHub Actions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Jenkins</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CocoaPods / SPM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Firebase</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Jira / Confluence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
