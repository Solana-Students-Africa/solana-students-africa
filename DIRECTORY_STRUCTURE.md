# SSA Website - Directory Structure

This document outlines the recommended directory structure for the Solana Students Africa website codebase.

## Current Structure Issues

- Section components mixed with page-specific components
- No clear separation between shared and page-specific components
- Data (like team members, events, universities) scattered across files
- Animation utilities not well organized
- No constants/config files for brand colors, links, etc.

## Recommended Structure

```
src/
├── App.tsx                    # Main app with routes
├── main.tsx                   # Entry point
├── index.css                  # Global styles, Tailwind imports
├── vite-env.d.ts              # Vite type definitions
│
├── assets/                    # Static assets imported in code
│   └── icons/                 # SVG icons as React components
│
├── components/
│   ├── layout/                # Layout components
│   │   ├── navbar.tsx         # Main navigation
│   │   ├── footer.tsx         # Main footer
│   │   ├── page-layout.tsx    # Page wrapper with common elements
│   │   └── container.tsx      # Content container
│   │
│   ├── ui/                    # Reusable UI primitives
│   │   ├── badge.tsx          # Pill badges
│   │   ├── button.tsx         # Button variants
│   │   ├── card.tsx           # Card components
│   │   ├── section-header.tsx # Section titles
│   │   └── social-link.tsx    # Social media links
│   │
│   └── shared/                # Shared complex components
│       ├── engagement-card.tsx
│       ├── startup-card.tsx
│       ├── activity-card.tsx
│       ├── university-tag.tsx
│       ├── event-poster.tsx
│       ├── team-member-card.tsx
│       └── partner-logo.tsx
│
├── pages/                     # Page components (route-level)
│   ├── index.tsx              # Homepage (/)
│   ├── about.tsx              # About page (/about)
│   ├── team.tsx               # Team page (/team)
│   ├── events.tsx             # Events page (/events)
│   ├── community.tsx          # Community page (/community)
│   ├── partners.tsx           # Partners page (/partners)
│   ├── contact.tsx            # Contact page (/contact)
│   └── not-found.tsx          # 404 page
│
├── sections/                  # Page section components
│   ├── home/                  # Homepage sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── benefits.tsx
│   │   ├── events-preview.tsx
│   │   ├── partners.tsx
│   │   ├── community.tsx
│   │   ├── marquee.tsx
│   │   └── cta.tsx
│   │
│   ├── about/                 # About page sections
│   │   ├── hero.tsx
│   │   ├── mission.tsx
│   │   ├── focus.tsx
│   │   ├── timeline.tsx
│   │   └── info.tsx
│   │
│   ├── events/                # Events page sections
│   │   ├── hero.tsx
│   │   ├── upcoming.tsx
│   │   ├── recent.tsx
│   │   └── highlights.tsx
│   │
│   └── community/             # Community page sections
│       ├── hero.tsx
│       ├── join.tsx
│       ├── engagement.tsx
│       ├── startups.tsx
│       ├── activities.tsx
│       └── universities.tsx
│
├── data/                      # Static data
│   ├── team.ts                # Team members data
│   ├── events.ts              # Events data
│   ├── universities.ts        # Partner universities
│   ├── partners.ts            # Partner organizations
│   ├── startups.ts            # Community startups
│   └── navigation.ts          # Navigation links
│
├── constants/                 # App constants
│   ├── brand.ts               # Brand colors, fonts
│   ├── social.ts              # Social media links
│   └── routes.ts              # Route paths
│
├── lib/                       # Utility functions
│   ├── utils.ts               # General utilities (cn, etc.)
│   └── animations.ts          # Animation utilities
│
├── animations/                # GSAP animations (if keeping)
│   ├── classes/
│   │   ├── AnimationBase.ts
│   │   ├── Component.ts
│   │   └── Gsap.ts
│   ├── constants/
│   │   └── easings.ts
│   ├── types/
│   └── utils/
│
├── hooks/                     # Custom React hooks
│   ├── use-scroll.ts
│   ├── use-media-query.ts
│   └── use-animation.ts
│
└── types/                     # TypeScript types
    ├── team.ts
    ├── event.ts
    └── partner.ts

public/
├── favicon.ico
├── robots.txt
├── og-banner.jpg
├── fonts/
│   ├── gellix/
│   └── Poppins/
├── images/
│   ├── logos/                 # Brand logos
│   │   ├── logo.png
│   │   ├── blackLogo.png
│   │   └── ssa-logo-footer.png
│   │
│   ├── partners/              # Partner logos
│   │   ├── superteam.jpg
│   │   ├── nithub.jpg
│   │   └── ...
│   │
│   ├── universities/          # University logos
│   │   ├── unilag-logo.jpeg
│   │   ├── lasu-logo.jpeg
│   │   └── ...
│   │
│   ├── community/             # Community photos
│   │   ├── community-1.jpg
│   │   ├── community-2.jpg
│   │   └── ...
│   │
│   ├── events/                # Event photos
│   │   └── SSA2025/
│   │
│   ├── team/                  # Team member photos
│   │
│   ├── hero/                  # Hero section assets
│   │   ├── hero-africa-green.svg
│   │   ├── hero-blue-shape.svg
│   │   ├── hero-star-yellow.svg
│   │   └── hero-trophy-orange.svg
│   │
│   └── icons/                 # Static icons (SVG)
│       ├── x-icon.svg
│       ├── linkedin-icon.svg
│       └── ...
│
└── videos/
    └── experience-summit-video.mp4
```

## Benefits of This Structure

1. **Clear Separation of Concerns**
   - Layout components (navbar, footer) in `components/layout/`
   - Reusable UI primitives in `components/ui/`
   - Shared complex components in `components/shared/`
   - Page-specific sections in `sections/{page-name}/`

2. **Easy Data Management**
   - All static data in `data/` folder
   - Easy to update team members, events, etc.
   - Single source of truth for repeated data

3. **Type Safety**
   - Centralized types in `types/` folder
   - Consistent interfaces across components

4. **Scalability**
   - Easy to add new pages
   - Clear pattern for new sections
   - Modular component structure

5. **Organized Assets**
   - Public images categorized by purpose
   - Easy to find and replace assets
   - Clear naming conventions

## Migration Steps

1. Create the new folder structure
2. Move existing components to appropriate locations
3. Create data files and extract static data
4. Update imports across all files
5. Add TypeScript types
6. Test all routes and components

## File Naming Conventions

- **Components**: PascalCase for component names, kebab-case for files
  - `TeamMemberCard` in `team-member-card.tsx`
- **Pages**: kebab-case
  - `community.tsx`
- **Data files**: kebab-case
  - `team-members.ts`
- **Types**: kebab-case
  - `team.ts`
