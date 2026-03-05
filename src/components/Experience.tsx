export interface ExperienceProps { }

export default function Experience({ }: ExperienceProps) {
    return (
        <section id="experience" className="py-16 bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
                    <p className="text-slate-600 dark:text-slate-400">A timeline of technical leadership and milestone achievements.</p>
                </div>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary">
                            <span className="material-symbols-outlined text-[20px]">architecture</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">Technology Architect iOS</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">Current</span>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">Banco de Crédito BCP • July 2022 - Present</div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                Leading the definition of iOS guidelines and best practices for the entire mobile ecosystem. Architecting internal libraries and frameworks to standardize development across squads and improve code reusability.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">SwiftUI</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Design Systems</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Internal Libraries</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">code</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">Software Engineer III - iOS</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">2021 - 2022</span>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">Scotiabank • May 2021 - June 2022</div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                Focused on high-impact banking features including Apple Pay integration, Plin/QR payments, and Credit Card management functionalities. Ensured security compliance and seamless user experiences for critical financial transactions.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Apple Pay</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Fintech</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Security</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">code</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">Software Engineer II - iOS)</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">2020 - 2021</span>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">Avantica • Feb 2020 - May 2021</div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                Developed and maintained various iOS applications, focusing on clean code practices and efficient delivery. Collaborated with cross-functional teams to implement new features.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">iOS Development</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Agile</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Clean Code</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">code</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">iOS Developer</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">2019 - 2020</span>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">Sud Technologies • Sept 2019 - Feb 2020</div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                Contributed to the development of mobile solutions, ensuring technical quality and alignment with client requirements during the product lifecycle.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">iOS</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Mobile Apps</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">code</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">iOS Developer</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">2017 - 2019</span>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">Universidad de Lima • Sept 2017 - Sept 2019</div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                Lead the development of the university portal application serving over 20,000 students. Implemented VIPER architecture for scalability and managed local data persistence with Core Data.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">VIPER</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Core Data</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Swift</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-surface-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">school</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">Systems Engineer</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">Graduated</span>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">Universidad de Lima • 2019</div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                Specialized in Software Engineering. Academic focus on high-performance computing, distributed systems, and advanced software architecture.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Software Engineering</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Systems Architecture</span>
                                <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">Computer Science</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
