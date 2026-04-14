# Project Structure

## Folder Layout

```
arena-mvno-proposal/
├── docs/                          # Project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                    # Static images, logos, icons
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind + shadcn theme
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page (single-page proposal)
│   ├── components/
│   │   ├── sections/              # Page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── Opportunity.tsx
│   │   │   ├── ContentArsenal.tsx
│   │   │   ├── ProductTiers.tsx
│   │   │   ├── GalloMusic.tsx
│   │   │   ├── PropertyMap.tsx
│   │   │   ├── RevenueModel.tsx
│   │   │   └── NextSteps.tsx
│   │   └── ui/                    # shadcn UI primitives
│   ├── content/                   # Static content data (JSON/TS)
│   └── lib/
│       └── utils.ts               # Utility functions
├── components.json                # shadcn configuration
├── next.config.ts                 # Next.js configuration
├── package.json
├── tailwind.config.ts             # Tailwind configuration (if present)
├── tsconfig.json
└── pnpm-lock.yaml
```

## Section Composition Rules

1. **Each section is a self-contained component** in `src/components/sections/`
2. **Content data lives in `src/content/`** as TypeScript objects or JSON -- sections import from here, not hardcode content
3. **UI primitives from shadcn** (`src/components/ui/`) are composed into section components -- never modified directly
4. **The home page** (`src/app/page.tsx`) imports and stacks all section components in order
5. **No page routing** -- this is a single-page proposal site with anchor-linked sections

## Content Management Approach

- All proposal content is stored as static TypeScript data in `src/content/`
- Content changes require code edits and redeployment
- No CMS, no database, no API calls for content
- Images are served from `public/images/`
- This approach is intentional -- the site is a fixed proposal document, not a dynamic application
