import type { SkillCategory } from './types/skills';

export const skillCategories: SkillCategory[] = [
    {
        icon: "developer_mode",
        iconColor: "text-blue-500",
        title: "Core Development",
        displayMode: "list",
        items: [
            "Swift & Objective-C",
            "SwiftUI & UIKit",
            "Combine & Async/Await",
            "Core Data / SwiftData",
        ],
    },
    {
        icon: "architecture",
        iconColor: "text-purple-500",
        title: "Architecture & QA",
        displayMode: "tags",
        items: ["MVVM-C", "VIPER", "XCTest", "Snapshot Testing", "Clean Architecture"],
        description:
            "Strong advocate for modularization and testable code. Experienced in setting up scalable architectures for large teams.",
    },
    {
        icon: "build_circle",
        iconColor: "text-green-500",
        title: "Tools & CI/CD",
        displayMode: "grid",
        items: ["Fastlane", "GitHub Actions", "Jenkins", "CocoaPods / SPM", "Firebase", "Jira / Confluence"],
    },
];
