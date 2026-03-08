export interface TimelineEntry {
    title: string;
    company: string;
    period: string;
    dateLabel: string;
    description: string;
    tags: string[];
    icon: string;
    isCurrent?: boolean;
}
