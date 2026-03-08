export interface SiteOwner {
    name: string;
    role: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    twitter: string;
}

export interface CareerStart {
    year: number;
    /** 0-indexed month (January = 0) */
    month: number;
}
