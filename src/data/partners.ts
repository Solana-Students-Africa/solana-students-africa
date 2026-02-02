// Partners data for Solana Students Africa

export interface Partner {
  name: string;
  logo: string;
  url?: string;
  type: "ecosystem" | "community" | "sponsor";
}

export const PARTNERS: Partner[] = [
  { name: "Superteam", logo: "/images/superteam.jpg", type: "ecosystem" },
  { name: "NitHub", logo: "/images/nithub.jpg", type: "community" },
  { name: "Web3 Unilag", logo: "/images/web3-unilag.jpg", type: "community" },
  { name: "Blueshift", logo: "/images/blueshift.jpg", type: "community" },
  { name: "GDSC", logo: "/images/partner-gdsc.png", type: "community" },
  { name: "GitHub", logo: "/images/partner-github.png", type: "ecosystem" },
  { name: "Women in Swift", logo: "/images/partner-women-swift.png", type: "community" },
  { name: "Web3 Africa", logo: "/images/partner-web3-africa.png", type: "community" },
];

export const ECOSYSTEM_PARTNERS = PARTNERS.filter((p) => p.type === "ecosystem");
export const COMMUNITY_PARTNERS = PARTNERS.filter((p) => p.type === "community");
