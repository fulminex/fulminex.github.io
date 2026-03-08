import { skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/types/skills';

function SkillList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-4">
            {items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </li>
            ))}
        </ul>
    );
}

function SkillTags({ items, description }: { items: string[]; description?: string }) {
    return (
        <>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300">{item}</span>
                ))}
            </div>
            {description && (
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{description}</p>
            )}
        </>
    );
}

function SkillGrid({ items }: { items: string[] }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400 text-sm">terminal</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                </div>
            ))}
        </div>
    );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
    return (
        <div className="bg-slate-50 dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
                <span className={`material-symbols-outlined ${category.iconColor} text-3xl`}>{category.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
            </div>
            {category.displayMode === 'list' && <SkillList items={category.items} />}
            {category.displayMode === 'tags' && <SkillTags items={category.items} description={category.description} />}
            {category.displayMode === 'grid' && <SkillGrid items={category.items} />}
        </div>
    );
}

export interface SkillsProps { }

export default function Skills({ }: SkillsProps) {
    return (
        <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">Technical Arsenal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <SkillCategoryCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}
