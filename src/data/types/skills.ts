export type SkillDisplayMode = 'list' | 'tags' | 'grid';

export interface SkillCategory {
    icon: string;
    iconColor: string;
    title: string;
    items: string[];
    description?: string;
    displayMode: SkillDisplayMode;
}
