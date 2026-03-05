export interface TestimonialProps { }

export default function Testimonial({ }: TestimonialProps) {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-background-dark dark:to-surface-dark border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="material-symbols-outlined text-6xl text-primary/20 mb-6">format_quote</span>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 italic leading-tight">
                    "I don't just write code; I craft experiences. For me, the difference between a good app and a great one lies in the micro-interactions, the fluidity of animations, and the robustness of the underlying architecture."
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-primary to-purple-600"></div>
                    <div className="text-left">
                        <div className="font-bold text-slate-900 dark:text-white">Angel Herrera Medina</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Technology Architect</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
