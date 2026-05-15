# Startup Journey: Bourgaeux

## 1. Current Snapshot

- **Project name:** Bourgaeux
- **Local folder:** `/Users/joshuadavis/startups/bourgaeux`
- **Live URL:** https://bourgaeux.noaerth.com
- **Live site status:** HTTP **200** (checked 2026-05-14)
- **Framework:** Next.js 14 App Router, TypeScript, Tailwind 3, OpenAI + Zod
- **Package manager:** pnpm
- **Build command:** `pnpm build`
- **Local review:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (clean reinstall)
- **Deployment:** **Not run**
- **Git remote:** `https://github.com/M4G3LL4N0/bourgaeux.git`
- **Last updated:** 2026-05-14

## 2. Portfolio Score (0–100)

**Score: 74 / 100**

| Dimension | Notes |
|-----------|--------|
| Product clarity | Excellent lifestyle-intelligence positioning |
| MVP depth | Strong recommend form + `/api/recommend` with demo fallback |
| Design | Premium gold-on-black hero; distinctive |
| Mobile | Global `SiteNav` + `#how-it-works` anchor added |
| Technical health | Build green; Jest in devDeps |
| GTM | Early-access funnel on-page |
| Moat | Taste graph + social discovery (not built yet) |

**Triage:** **Keep & deepen** recommendation loop before auth.

## 3. 10-Second Startup Explanation

- **What:** AI lifestyle assistant that surfaces taste blind spots and recommends what to try next.
- **Who:** Urban explorers, food/drink enthusiasts, social discoverers.
- **Pain:** Search-first apps miss “you are missing this.”
- **User action:** Complete onboarding → get recommendation cards.
- **CTA:** Reveal my blind spots (`#recommend`)

## 4. Founder Thesis

- **Belief:** Real-life discovery should be recommendation-first, not search-first.
- **Wedge:** Taste input → structured recommendations (OpenAI or demo).
- **Expansion:** Social taste graph, saved sessions, friend overlap.
- **Risk:** No persistence yet — recommendations are ephemeral.

## 5. Live Website Diagnosis

- **Works:** Hero, pillars, onboarding, live 200.
- **Weak:** Nav was hero-only on mobile (fixed with layout `SiteNav`).
- **Next:** Confidence signals on cards; saved sessions.

## 6. Local Codebase Diagnosis

- **Routes:** `/`, `/api/recommend`, `/api/chat`, `/api/checkout`
- **Key files:** `OnboardingForm`, `RecommendationCard`, `bourgaeux.ts` schemas
- **This loop:** `SiteNav`, layout, Hero simplification, `id="how-it-works"`

## 7. Work Completed This Loop (2026-05-14)

- Global sticky navigation with mobile menu
- Removed duplicate hero nav; added `#how-it-works` section id
- **Build:** PASS
- **Deploy:** skipped

## 8. Next Loop Plan

- Recommendation session persistence (Supabase + RLS)
- Card hierarchy: budget, tags, confidence
- Chat route production key on Vercel when ready

## 9. Local Review

```bash
cd /Users/joshuadavis/startups/bourgaeux && pnpm dev
```
