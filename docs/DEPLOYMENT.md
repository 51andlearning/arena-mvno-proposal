# Deployment Guide

## GitHub Repository Setup

1. Create a new repository on GitHub (e.g., `arena-mvno-proposal`)
2. Set visibility to **Private** (proposal content is confidential)
3. Do not initialise with README, .gitignore, or license (already in project)
4. Add the remote and push:

```bash
git remote add origin https://github.com/<username>/arena-mvno-proposal.git
git branch -M main
git push -u origin main
```

## Vercel Project Setup

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (project root)
   - **Build Command:** `pnpm build`
   - **Install Command:** `pnpm install`
   - **Output Directory:** Leave blank (Next.js default)
4. Deploy

## Root Directory Rules

- The project is a standalone Next.js app at the repository root
- Do NOT set a subdirectory as root -- `package.json` and `next.config.ts` are at the top level
- If this repo is ever nested inside a monorepo, update the Vercel root directory setting accordingly

## Environment Variables

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID | Optional |
| `NEXT_PUBLIC_SITE_URL` | Production URL for metadata | Optional |

- Add environment variables in Vercel Dashboard > Project > Settings > Environment Variables
- Prefix with `NEXT_PUBLIC_` for client-side access

## How to Redeploy

### Automatic
- Push to `main` branch -- Vercel auto-deploys on every push

### Manual
- Vercel Dashboard > Project > Deployments > click "Redeploy" on any deployment
- Or via CLI: `npx vercel --prod`

### Preview Deployments
- Every push to a non-main branch creates a preview deployment with a unique URL
- Use this for stakeholder review before merging to production

## Build Command Reference

```bash
# Local development
pnpm dev

# Production build (test locally)
pnpm build

# Start production server locally
pnpm start

# Lint
pnpm lint
```
