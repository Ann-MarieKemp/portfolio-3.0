@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Ann-Marie Kemp's personal portfolio — Next.js (App Router) with MDX content, statically exported and hosted on S3 (`a-mkemp.com`). There is no backend/server at runtime; everything is pre-rendered at build time.

## Commands

```bash
npm run dev      # local dev server, http://localhost:3000
npm run build    # static export -> out/ (output: 'export' in next.config.mjs)
npm run lint     # eslint .
S3_BUCKET=a-mkemp.com npm run deploy   # build + aws s3 sync out/ to S3 (--delete)
```

There is no test suite in this repo. There is no CI/CD — deploys are manual from a developer machine and require AWS CLI credentials with write access to the bucket.

## Architecture

**Static export constraints.** `next.config.mjs` sets `output: 'export'` and `trailingSlash: true`, and `images.unoptimized: true`. Every route must be fully static — no server actions, no API routes, no `next/image` optimization at request time. `trailingSlash: true` is what makes folder-style URLs (`/AboutMe/`) resolve on S3 static website hosting, so don't remove it.

**Craft posts are MDX files treated as a mini content-collection system**, not literal Next.js pages:
- Source files live at `src/app/PostPage/<category>/<slug>.mdx`, one folder per category. Categories are the fixed list in `POST_CATEGORIES` in [src/hooks/postHooks.ts](src/hooks/postHooks.ts): `baking`, `weaving`, `crochet`, `knitting`, `paper`, `spinning`.
- Frontmatter (`title`, `image`, optional `images` array for a carousel, `category`, optional `id`, optional `rotate`) is parsed via `remark-mdx-frontmatter` and compiled with `next-mdx-remote/rsc`'s `compileMDX`.
- All posts, regardless of category, are served through the single catch-all route `src/app/[slug]/page.tsx`. It looks up which category a slug belongs to via `getCategoryForSlug`, then renders through `PostLayout`. `generateStaticParams` enumerates every slug across every category at build time (`getAllSlugs`) — there is no per-category post route.
- Post images live under `public/images/posts/<category>/<slug>/` and are referenced by absolute path from frontmatter.
- Adding a new post = add an `.mdx` file to the right category folder with correct frontmatter; no route file or registry update is needed. Category **listing** pages (`src/app/BakingWeeks/page.tsx`, `Weaving`, `Crochet`, `Knitting`, `PaperCrafts`, `Spinning`) each call `getAllPostsMeta(category)` directly and are otherwise near-identical — if you're changing the listing layout/behavior, check whether the change belongs in all of them.

**Category ↔ route naming is not 1:1** and is hardcoded in two places that must stay in sync when adding a category: `CATEGORY_DISPLAY` in [src/components/PostLayout.tsx](src/components/PostLayout.tsx) (maps a post's `category` to its listing route + label, used for the "Back to ..." link) and `craftArray` in [src/app/Crafts/page.tsx](src/app/Crafts/page.tsx) (the Crafts hub page, which also pulls each category's first post as a thumbnail).

**Non-craft pages** (`AboutMe`, `Projects`, `Resume`, `ContactInfo`, home) are plain `page.tsx` + co-located `.module.css`. `Projects/page.tsx` renders from static text constants in [src/constants/projectvariables.ts](src/constants/projectvariables.ts) rather than MDX — that's the place to edit project/work-history copy.

**Styling** is CSS Modules per component/page (`src/styles/*.module.css` or co-located `X.module.css`) plus `src/app/globals.css` for shared/global classes (e.g. `main-page-container`, `page-header`, `description-text`) used across many pages via plain string class names rather than modules.

**Path alias**: `@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)).
