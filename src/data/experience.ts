import type { TimelineEntry } from './types/experience';

export const experienceTimeline: TimelineEntry[] = [
    {
        title: "Technology Architect iOS",
        company: "Banco de Crédito BCP",
        period: "July 2022 - Present",
        dateLabel: "Current",
        description:
            "Leading the definition of iOS guidelines and best practices for the entire mobile ecosystem. Architecting internal libraries and frameworks to standardize development across squads and improve code reusability.",
        tags: ["SwiftUI", "Design Systems", "Internal Libraries"],
        icon: "architecture",
        isCurrent: true,
    },
    {
        title: "Software Engineer III - iOS",
        company: "Scotiabank",
        period: "May 2021 - June 2022",
        dateLabel: "2021 - 2022",
        description:
            "Focused on high-impact banking features including Apple Pay integration, Plin/QR payments, and Credit Card management functionalities. Ensured security compliance and seamless user experiences for critical financial transactions.",
        tags: ["Apple Pay", "Fintech", "Security"],
        icon: "code",
    },
    {
        title: "Software Engineer II - iOS",
        company: "Avantica",
        period: "Feb 2020 - May 2021",
        dateLabel: "2020 - 2021",
        description:
            "Developed and maintained various iOS applications, focusing on clean code practices and efficient delivery. Collaborated with cross-functional teams to implement new features.",
        tags: ["iOS Development", "Agile", "Clean Code"],
        icon: "code",
    },
    {
        title: "iOS Developer",
        company: "Sud Technologies",
        period: "Sept 2019 - Feb 2020",
        dateLabel: "2019 - 2020",
        description:
            "Contributed to the development of mobile solutions, ensuring technical quality and alignment with client requirements during the product lifecycle.",
        tags: ["iOS", "Mobile Apps"],
        icon: "code",
    },
    {
        title: "iOS Developer",
        company: "Universidad de Lima",
        period: "Sept 2017 - Sept 2019",
        dateLabel: "2017 - 2019",
        description:
            "Lead the development of the university portal application serving over 20,000 students. Implemented VIPER architecture for scalability and managed local data persistence with Core Data.",
        tags: ["VIPER", "Core Data", "Swift"],
        icon: "code",
    },
    {
        title: "Systems Engineer",
        company: "Universidad de Lima",
        period: "2019",
        dateLabel: "Graduated",
        description:
            "Specialized in Software Engineering. Academic focus on high-performance computing, distributed systems, and advanced software architecture.",
        tags: ["Software Engineering", "Systems Architecture", "Computer Science"],
        icon: "school",
    },
];
