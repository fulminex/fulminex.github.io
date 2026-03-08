export interface HeroStat {
    value: string;
    label: string;
}

export interface HeroFloatingCard {
    icon: string;
    title: string;
    subtitle: string;
    bgColor: string;
}

export interface HeroContent {
    headline: { line1: string; line2: string };
    description: string;
    ctaLabel: string;
    stats: HeroStat[];
    floatingCards: HeroFloatingCard[];
}
