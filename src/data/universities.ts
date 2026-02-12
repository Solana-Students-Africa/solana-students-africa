// Universities data for Solana Students Africa

export interface University {
  name: string;
  shortName?: string;
  logo?: string;
  location?: string;
}

export const UNIVERSITIES: University[] = [
  { name: "University Of Lagos", shortName: "UNILAG", logo: "/images/unilag-logo.jpeg" },
  { name: "Lagos State University", shortName: "LASU", logo: "/images/lasu-logo.jpeg" },
  { name: "Yaba College Of Technology", shortName: "YABATECH" },
  { name: "University Of Ibadan", shortName: "UI" },
  { name: "Ladoke Akintola University", shortName: "LAUTECH" },
  { name: "Babcock University", logo: "/images/babcock-logo.png" },
  { name: "University of Ilorin", logo: "/images/ilorin-logo.jpeg" },
  { name: "Caleb University", logo: "/images/caleb-logo.png" },
  { name: "University of Abuja", shortName: "UNIABUJA" },
  { name: "Nnamdi Azikiwe University", shortName: "UNIZIK" },
  { name: "Olabisi Onabanjo University", shortName: "OOU" },
  { name: "Federal University of Agriculture Abeokuta", shortName: "FUNAAB" },
  { name: "University of Uyo", shortName: "UNIUYO" },
];

export const FEATURED_UNIVERSITIES = UNIVERSITIES.slice(0, 6);
