// Activities data for community engagement

export interface Activity {
  name: string;
  description?: string;
}

export const ACTIVITIES: Activity[] = [
  { name: "Hackathons", description: "Compete and build innovative solutions" },
  { name: "AMA Sessions", description: "Ask questions to industry experts" },
  { name: "Networking Sessions", description: "Connect with fellow builders" },
  { name: "Social Nights", description: "Unwind and have fun with the community" },
  { name: "Workshops &\nBootcamps", description: "Learn hands-on skills" },
];

export interface EngagementItem {
  title: string;
  description: string;
}

export const ENGAGEMENT_ITEMS: EngagementItem[] = [
  {
    title: "Sign up for our programs",
    description:
      "Gain hands-on knowledge through bootcamps, workshops, and mentorship sessions led by Solana developers and ecosystem professionals.\n You'll learn how to build real projects using Rust, Anchor, and Solana SDKs — from beginner to advanced.",
  },
  {
    title: "Participate in events",
    description:
      "Be a part of the conversations shaping the future. Take part in our hands-on sessions and solana focused  discussions that help you grow. ",
  },
  {
    title: "Stay updated on our Social Media",
    description:
      "Follow us on all major platforms to get firsthand updates, and exciting opportunities.",
  },
  {
    title: "Volunteer your skills",
    description: "Contribute as a volunteer to our projects and impact-driven initiatives.",
  },
];
