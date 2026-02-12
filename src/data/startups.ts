// Startups data for the community page

export interface Startup {
  name: string;
  description: string;
  category: string;
  logo?: string;
  url?: string;
}

export const STARTUPS: Startup[] = [
  {
    name: "studIQ",
    description: "",
    category: "EDTECH",
  },
  {
    name: "Sling",
    description: "",
    category: "FINTECH",
  },
  {
    name: "AfricanResearchBase",
    description: "",
    category: "RESEARCH",
  },
  {
    name: "Konnect",
    description: "",
    category: "SOCIAL",
  },
  {
    name: "token analysis",
    description: "",
    category: "ANALYTICS",
  },
  {
    name: "AfroLearn",
    description: "",
    category: "EDTECH",
  },
];
