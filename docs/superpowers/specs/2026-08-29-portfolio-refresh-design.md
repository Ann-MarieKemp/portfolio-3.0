# Portfolio Visual & Content Refresh — Design

## Purpose

The portfolio currently reads as a generic "Full Stack Software Developer" template: a plain hero, a Projects page that mixes job history and side projects under identical cards, and a carousel that hides its own coverflow effect. The goals of this refresh are to:

1. Reposition the site's messaging around a Mobile Engineering Lead career direction.
2. Make the homepage feel like a specific person, not a template, by surfacing the crafts.
3. Separate "what I've built for fun" (Projects) from "what I've done professionally" (Experience), and lead with Experience.
4. Fix the carousel's broken coverflow effect and add navigation feedback (dot indicators), since it's shared by the cat photos and every craft post gallery.

Constraints: static export only (no server actions/API routes — see `CLAUDE.md`), no new external dependencies, no new content types beyond what's described below (tech tags as short strings).

## Non-goals

- No swipe/touch gesture or keyboard navigation for the carousel (explicitly deprioritized).
- No new screenshot assets for Dot Eater/Recipix/12Steps.video — they keep their current YouTube embeds or text-only presentation.
- No nav bar redesign, no cat mascot/easter egg — personality is concentrated in the homepage craft strip and existing AboutMe content, not scattered site-wide.
- No change to the MDX post content model, category structure, or deploy process.

## A. Visual identity

Keep the existing design-token system in `src/app/globals.css` as the base (warm-neutral palette, one blue accent, dark mode, spacing/radius scale) — it already reads as modern minimal. Two additions:

- **A second accent color** (terracotta/rust family, e.g. `--color-accent-warm: #b5651d` light / a lighter warm tone for dark mode) reserved for personal/craft content: the Crafts hub, craft post headers, and the homepage craft strip. The existing blue accent (`--color-accent`) remains for professional content: nav, Experience, Projects, CTAs. This creates a "professional vs. personal" visual language without a full theme split.
- **A reusable tag/chip style** — small pill-shaped, bordered labels built from existing spacing/radius tokens (e.g. `--radius-sm`, `--space-2`/`--space-3`, `--color-border`). Used for project tech tags and the carousel dots' active/inactive states. One shared CSS class (e.g. `.tag-chip` in `globals.css`), not a new per-component style.

No typography change.

## B. Homepage (`src/app/page.tsx`, `src/app/page.module.css`)

Hero copy changes:
- Tagline replaces "Full Stack Software Developer" with a Mobile Engineering Lead framing, e.g. "Mobile Engineering Lead — React Native, mobile architecture, and accessibility at scale." (exact copy to be finalized during implementation, following this framing).
- No personal/parenthetical hook line in the hero — it stays professional. Personality is carried entirely by the craft strip below.
- `AboutMe`'s opening line already leads with "Lead Application Development Engineer at Centene specializing in mobile application development" — no rewrite needed there, just keep the homepage tagline's wording consistent with it rather than contradicting it (today's "Full Stack Software Developer" is the only place that's out of step).
- The site `<title>`/`description`/OpenGraph metadata in `src/app/layout.tsx` (currently generic: "Ann-Marie Kemp Portfolio Site") gets updated to reflect the mobile-lead framing, since that's what search/social previews show.

New craft teaser strip, added below the existing nav-link row:
- A thin horizontal row of small square thumbnails, one per craft category (`baking`, `weaving`, `crochet`, `knitting`, `paper`, `spinning`), each linking to that category's page.
- Implementation reuses the thumbnail-fetch pattern already in `src/app/Crafts/page.tsx` (`getAllPostsMeta(category)`, first post's image) rather than introducing new data — the homepage becomes async like `Crafts`/`BakingWeeks` already are.
- A "See all crafts" link below the strip, pointing to `/Crafts`.
- Styled with the warm accent from section A.

## C. Experience & Projects (`src/app/Projects/page.tsx`)

Split the current single flat list (which mixes job history and side projects under the same `SingleProject` card) into two sections, **Experience first, Projects second** — reflecting that this is now a leadership-positioned site where career scope matters more than side projects.

**Experience** — new compact vertical timeline component (e.g. `ExperienceEntry`), replacing `SingleProject` usage for the four job entries (Centene Lead, Centene Senior, IBM Band 07, IBM Band 06). Each entry shows role, company, dates, and its existing bullet list (from `projectvariables.ts` — `centeneLeadDescription`, etc., unchanged). No GitHub/demo/video affordances, since jobs don't have those.

**Projects** — the three side projects (Dot Eater, Recipix, 12Steps.video) become a responsive card grid (2 columns on desktop, 1 on mobile), keeping the existing `SingleProject` card visuals (background, border, shadow, hover lift) but adding small tech tag chips (section A style) under each project title:
- Dot Eater: e.g. `React`, `Node`
- Recipix: e.g. `React Native` (reinforces the mobile positioning)
- 12Steps.video: e.g. `Go`, `PostgreSQL`

Tags are new short string arrays added alongside each project's existing description constant in `src/constants/projectvariables.ts` — not a new content type or file.

Existing GitHub links, deploy links, and YouTube embeds are unchanged.

## D. Carousel (`src/components/Carousel.tsx`, `src/styles/Carousel.module.css`)

Two fixes, no new dependency, shared by both the AboutMe cat carousel and every craft post's image gallery:

1. **Real coverflow peek.** `.opacity-half` currently sets `visibility: hidden`, which defeats the `transform: scale(0.7)` already applied to non-active slides — they're invisible, not peeking. Change it to a dimmed-but-visible state: `visibility: visible; opacity: 0.45;` (keeping the existing `scale(0.7)` transform), so adjacent images are genuinely visible at reduced size/opacity on either side of the active slide.
2. **Dot indicators.** A new row of small round buttons below the slider (reusing the arrow-container's layout approach), one per image. The active dot uses the tag-chip active style from section A; others are muted/bordered. Clicking a dot jumps `imageIdx` directly to that index. Each button gets `aria-label="Go to photo N"`.

No swipe/touch or keyboard navigation — arrows plus the new dots remain the full interaction model, per explicit scope decision.

## Testing

No existing test suite in this repo (confirmed in `CLAUDE.md`). Verification is manual: `npm run dev`, check each changed page/component in the browser, in both light and dark color schemes, and confirm `npm run build` still produces a clean static export (`out/`) with no new server-only APIs introduced.

## Open items for implementation

- Exact hero/tagline copy wording (framing is fixed: Mobile Engineering Lead; exact sentence to be written during implementation).
- Exact hex value for the new warm accent color (direction: terracotta/rust family, light and dark-mode variants) — pick a value that passes contrast against `--color-bg`/`--color-bg-elevated` in both modes.
- Exact tech tags per project (React/Node for Dot Eater, React Native for Recipix, Go/PostgreSQL for 12Steps.video) — confirm against each project's actual stack before finalizing labels.
