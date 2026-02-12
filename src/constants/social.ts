// Social media links for Solana Students Africa

export const SOCIAL_LINKS = {
  twitter: "https://x.com/SolanaStudentAf",
  linkedin: "https://www.linkedin.com/in/solana-students-africa-8454a42a1/",
  instagram: "https://www.instagram.com/solanastudents_africa/",
  tiktok: "https://www.tiktok.com/@solanastudents_africa?lang=en",
  github: "https://github.com/Solana-Students-Africa",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
