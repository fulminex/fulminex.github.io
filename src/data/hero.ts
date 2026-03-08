import type { HeroContent } from './types/hero';

export const heroContent: HeroContent = {
    headline: {
        line1: "Senior iOS",
        line2: "Engineering",
    },
    description:
        "Technology Architect & iOS Expert delivering robust, scalable mobile solutions since {careerStartYear}. Specialized in modern SwiftUI achitectures, high-performance computing, and crafting pixel-perfect Apple ecosystem experiences.",
    ctaLabel: "Get In Touch",
    stats: [
        { value: "{yearsOfExperience}+", label: "Years Experience" },
        { value: "6+", label: "Apps Shipped" },
        { value: "17M+", label: "Users Impacted" },
    ],
    floatingCards: [
        {
            icon: "A",
            title: "iOS Architect",
            subtitle: "System Design Expert",
            bgColor: "bg-orange-500",
        },
        {
            icon: "rocket_launch",
            title: "App Store Launch",
            subtitle: "Featured 3x",
            bgColor: "bg-blue-500",
        },
    ],
};
