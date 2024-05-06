export interface Skill {
    name: string;
    logo: string;
    link: string;
}

export interface Experience {
    icon: string;
    title: string;
    position: string;
    date: string;
    description?: string;
}

export interface Project {
    title: string;
    description: string;
    labels: string[];
    image: string;
    production?: string;
    github?: string;
}
