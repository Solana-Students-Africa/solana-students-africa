// Route paths for navigation

export const ROUTES = {
  home: "/",
  about: "/about",
  team: "/team",
  events: "/events",
  community: "/community",
  partners: "/partners",
  contact: "/contact",
} as const;

export const NAV_LINKS = [
  { name: "Events", href: ROUTES.events },
  { name: "Community", href: ROUTES.community },
  { name: "Partners", href: ROUTES.partners },
  { name: "Contact", href: ROUTES.contact },
] as const;

export const ABOUT_DROPDOWN = [
  { name: "Meet the team", href: ROUTES.team },
  { name: "About SSA", href: ROUTES.about },
] as const;
