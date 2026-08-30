# Portfolio Visual & Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the homepage/Projects messaging around a Mobile Engineering Lead career direction, separate professional Experience from side Projects, surface the crafts on the homepage, add a warm "personal" accent color and reusable tag-chip style, and fix the Carousel's broken coverflow + missing dot navigation.

**Architecture:** Pure static-export Next.js App Router changes — no new routes, no new dependencies, no server actions. Two React Server Components become `async` (mirroring the existing pattern in `src/app/Crafts/page.tsx`) to fetch craft thumbnails via the existing `getAllPostsMeta` hook. One new presentational component (`ExperienceEntry`) replaces `SingleProject` for job history. A new CSS custom property pair (`--color-accent-warm[-hover]`) and a shared `.tag-chip` / `.tag-chip-active` class pair in `globals.css` are consumed by three otherwise-unrelated features (homepage craft strip, project tech tags, carousel dots).

**Tech Stack:** Next.js (App Router, `output: 'export'`), React Server Components, CSS Modules + global CSS custom properties, `next-mdx-remote/rsc` via the existing `getAllPostsMeta` hook.

**Spec:** `docs/superpowers/specs/2026-08-29-portfolio-refresh-design.md`

## Global Constraints

- Static export only — no server actions, no API routes, no `next/image` remote optimization (`images.unoptimized: true` already set). See `CLAUDE.md`.
- No new external dependencies.
- No new content types beyond short tech-tag string arrays.
- No swipe/touch gesture or keyboard navigation for the Carousel (explicitly out of scope).
- No nav bar redesign, no cat mascot/easter egg.
- No change to the MDX post content model, category structure, or deploy process.
- **No test suite exists in this repo** (confirmed in `CLAUDE.md`). Per the spec's own Testing section, verification is: `npm run lint`, `npm run build` (must produce a clean static export with no errors), and a manual check in `npm run dev` in both light and dark color schemes. Every task below substitutes this for the usual write-test/run-test steps.
- Resolved open items from the spec:
  - Hero tagline: `Mobile Engineering Lead — React Native, mobile architecture, and accessibility at scale.` (mirrors `AboutMe`'s existing opening line, fixes the only place still saying "Full Stack Software Developer").
  - New warm accent: light `--color-accent-warm: #a8551a` (4.34:1 against `--color-bg-elevated` #ffffff, 5.01:1 against `--color-bg` #faf9f6 — WCAG AA for normal text on both) / dark `--color-accent-warm: #e0965f` (7.34:1 against dark `--color-bg` #18181b, 6.49:1 against dark `--color-bg-elevated` #232326). Verified with a standard WCAG relative-luminance contrast calculation.
  - Tech tags: Dot Eater → `React`, `Node`; Recipix → `React Native`; 12Steps.video → `Go`, `PostgreSQL` (matches each project's actual stack per its existing description text).

---

### Task 1: Design tokens & tag-chip system

**Files:**
- Modify: `src/app/globals.css:1-50` (token blocks), append new rule after `:root { ... }`'s companion dark block (after line 50, before line 52's `* { ... }`)

**Interfaces:**
- Produces: CSS custom properties `--color-accent-warm`, `--color-accent-warm-hover` (both light `:root` and the `@media (prefers-color-scheme: dark)` block). Global classes `.tag-chip` and `.tag-chip-active`, usable as plain string class names anywhere in the app (same convention as `.category-link`, `.portfolio-photo`, etc.).

- [ ] **Step 1: Add the warm accent tokens**

In `src/app/globals.css`, add two lines to the light `:root` block (after `--color-shadow`, line 11):

```css
  --color-accent-warm: #a8551a;
  --color-accent-warm-hover: #8a4515;
```

Add the matching two lines to the dark `@media (prefers-color-scheme: dark)` block (after its `--color-shadow`, line 48):

```css
    --color-accent-warm: #e0965f;
    --color-accent-warm-hover: #eeb083;
```

- [ ] **Step 2: Add the shared tag-chip classes**

Immediately after the dark-mode media query's closing `}` (currently line 50) and before `* { ... }` (currently line 52), insert:

```css

.tag-chip {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 13px;
  line-height: 1.4;
  color: var(--color-text-muted);
  background-color: var(--color-bg-elevated);
}
.tag-chip-active {
  border-color: var(--color-accent);
  background-color: var(--color-accent);
  color: var(--color-bg-elevated);
}
```

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run build`
Expected: clean build (these tokens/classes have no consumers yet, so the build must succeed exactly as it did before this change — no visible page difference).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "style: add warm accent tokens and shared tag-chip classes"
```

---

### Task 2: Site metadata refresh

**Files:**
- Modify: `src/app/layout.tsx:18-28`

**Interfaces:**
- Consumes: nothing from Task 1.
- Produces: nothing consumed by later tasks (leaf task).

- [ ] **Step 1: Update the metadata block**

Replace `src/app/layout.tsx` lines 18-28:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://a-mkemp.com"),
  title: "Ann-Marie Kemp",
  description: "Ann-Marie Kemp Portfolio Site",
  openGraph: {
    title: "Ann-Marie Kemp",
    description: "Ann-Marie Kemp Portfolio Site",
    url: "https://a-mkemp.com",
    type: "website",
  },
};
```

with:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://a-mkemp.com"),
  title: "Ann-Marie Kemp — Mobile Engineering Lead",
  description: "Ann-Marie Kemp — Mobile Engineering Lead specializing in React Native, mobile architecture, and accessibility.",
  openGraph: {
    title: "Ann-Marie Kemp — Mobile Engineering Lead",
    description: "Ann-Marie Kemp — Mobile Engineering Lead specializing in React Native, mobile architecture, and accessibility.",
    url: "https://a-mkemp.com",
    type: "website",
  },
};
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run build`
Expected: clean build.

Manual check: `npm run dev`, open `http://localhost:3000`, view page source (or the browser tab title) and confirm the `<title>` reads "Ann-Marie Kemp — Mobile Engineering Lead".

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "content: update site metadata to Mobile Engineering Lead framing"
```

---

### Task 3: Homepage hero copy + craft teaser strip

**Files:**
- Modify: `src/app/page.tsx` (whole-file rewrite, currently 39 lines)
- Modify: `src/app/page.module.css:1-6` (append craft-strip rules)

**Interfaces:**
- Consumes: `--color-accent-warm` / `--color-accent-warm-hover` from Task 1; `getAllPostsMeta(category: string)` from `src/hooks/postHooks.ts` (existing, returns `PostFrontmatter[]`, each with an `image: string` field) — same call already used in `src/app/Crafts/page.tsx`.
- Produces: nothing consumed by later tasks (leaf task).

- [ ] **Step 1: Rewrite the homepage tagline and add the craft strip**

Replace the full contents of `src/app/page.tsx` with:

```tsx
import React from "react"
import Link from "next/link"
import styles from "./page.module.css";
import ProjectLink from "@/components/ProjectLink";
import profileImage from '@/images/mainPortfolioImage.jpg'
import Image from 'next/image';
import { getAllPostsMeta } from "@/hooks/postHooks"

const craftStripItems = [
  { linkTo: "/BakingWeeks", linkText: "52 Weeks of Baking", alt: "baked goods", category: "baking" },
  { linkTo: "/Weaving", linkText: "Weaving", alt: "woven blanket", category: "weaving" },
  { linkTo: "/Crochet", linkText: "Crochet", alt: "crochet project", category: "crochet" },
  { linkTo: "/Knitting", linkText: "Knitting", alt: "socks", category: "knitting" },
  { linkTo: "/PaperCrafts", linkText: "Paper/Other", alt: "wedding table sign", category: "paper" },
  { linkTo: "/Spinning", linkText: "Spinning", alt: "spinning wheel bobbin", category: "spinning" },
]

const Home = async () => {
  const craftsWithThumbnails = await Promise.all(
    craftStripItems.map(async (craft) => {
      const posts = await getAllPostsMeta(craft.category);
      const thumbnail = posts[0]?.image as string | undefined;
      return { ...craft, thumbnail };
    })
  );

  return (
    <div className="main-page-container" >
      <Image src={profileImage} alt="Picture of Ann-Marie Kemp" height="315" width="315" className="portfolio-photo"/>
      <h1 className="main-page-header">Hello, my name is Ann-Marie Kemp</h1>
      <div className={`${styles['about-me-tag']} ${styles['index']}`}>
        <p>
          I am a <span className={styles['fade-in']}>Mobile Engineering Lead</span> — React Native, mobile architecture, and accessibility at scale.
        </p>
        <div className={styles['mainpage-project-link-container']}>
          <ProjectLink
            linkTo="/AboutMe"
            linkText="About Ann-Marie"
          />
          <ProjectLink
            linkTo="/Projects"
            linkText="Projects"
          />
          <ProjectLink
            linkTo="/Crafts"
            linkText="Crafts"
          />
          <ProjectLink
            linkTo="/ContactInfo"
            linkText="Contact Info"
          />
        </div>
      </div>
      <div className={styles['craft-strip']}>
        {craftsWithThumbnails.map((craft) => (
          craft.thumbnail ? (
            <Link key={craft.linkTo} href={craft.linkTo} className={styles['craft-strip-item']}>
              <Image
                src={craft.thumbnail}
                alt={craft.alt}
                width={80}
                height={80}
                className={styles['craft-strip-image']}
              />
              <span className={styles['craft-strip-label']}>{craft.linkText}</span>
            </Link>
          ) : null
        ))}
      </div>
      <Link href="/Crafts" className={styles['see-all-crafts-link']}>
        See all crafts
      </Link>
    </div>
  )
}

export default Home;
```

- [ ] **Step 2: Add craft-strip styles**

Append to `src/app/page.module.css`:

```css
.craft-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 var(--space-4);
}
.craft-strip-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  width: 80px;
  text-decoration: none;
}
.craft-strip-image {
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  object-fit: cover;
  transition: border-color 150ms ease;
}
.craft-strip-item:hover .craft-strip-image {
  border-color: var(--color-accent-warm);
}
.craft-strip-label {
  font-size: 13px;
  text-align: center;
  color: var(--color-accent-warm);
}
.craft-strip-item:hover .craft-strip-label {
  color: var(--color-accent-warm-hover);
}
.see-all-crafts-link {
  margin-top: var(--space-4);
  display: block;
  text-align: center;
  color: var(--color-accent-warm);
}
.see-all-crafts-link:hover {
  color: var(--color-accent-warm-hover);
}
```

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run build`
Expected: clean build; `/` remains in the static route list.

Manual check: `npm run dev`, open `http://localhost:3000`. Confirm:
- Tagline reads "I am a Mobile Engineering Lead — React Native, mobile architecture, and accessibility at scale."
- A row of 6 small thumbnails (baking, weaving, crochet, knitting, paper, spinning order) appears below the nav-link row, each linking to its category page.
- "See all crafts" link below the strip goes to `/Crafts`.
- Toggle OS light/dark mode (or devtools emulation) and confirm the craft strip labels/borders use the warm accent color in both modes and remain legible.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/page.module.css
git commit -m "feat: reposition homepage tagline and add craft teaser strip"
```

---

### Task 4: Carousel coverflow fix + dot indicators

**Files:**
- Modify: `src/components/Carousel.tsx:1-56` (whole-file rewrite)
- Modify: `src/styles/Carousel.module.css:38-45` (opacity-half/full rules) and append dot styles

**Interfaces:**
- Consumes: `.tag-chip` / `.tag-chip-active` global classes from Task 1.
- Produces: nothing consumed by later tasks (leaf task). No prop-interface change to `CarouselProps` — existing consumers (`AboutMe`, every craft post gallery) need no changes.

- [ ] **Step 1: Fix the coverflow peek**

In `src/styles/Carousel.module.css`, replace lines 38-45:

```css
.opacity-half {
  visibility: hidden;
}

.opacity-full {
  visibility: visible;
  transform: scale(1);
}
```

with:

```css
.opacity-half {
  visibility: visible;
  opacity: 0.45;
}

.opacity-full {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
```

- [ ] **Step 2: Add dot indicator styles**

Append to `src/styles/Carousel.module.css`:

```css
.dot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-3);
}
.dot:global(.tag-chip),
.dot:global(.tag-chip-active) {
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
}
```

- [ ] **Step 3: Add dot indicators to the component**

Replace the full contents of `src/components/Carousel.tsx` with:

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import styles from "@/styles/Carousel.module.css";

interface CarouselProps {
  images: string[];
  altPrefix?: string;
}

const Carousel = ({ images, altPrefix = "Photo" }: CarouselProps) => {
  const [imageIdx, setImageIdx] = useState(0);
  const trans = imageIdx * (100 / images.length);

  return (
    <div className={styles.slider}>
      <div
        className={styles["slider-wrapper"]}
        style={{ transform: `translateX(-${trans}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className={`${styles["carousel-image-container"]} ${
              index === imageIdx ? styles["opacity-full"] : styles["opacity-half"]
            }`}
          >
            <Image
              src={image}
              alt={`${altPrefix} ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div className={styles["arrow-container"]}>
        <Arrow
          clickFunc={() => setImageIdx((i) => Math.max(0, i - 1))}
          graphic="Prev"
          disabled={imageIdx === 0}
        />
        <Arrow
          clickFunc={() => setImageIdx((i) => Math.min(images.length - 1, i + 1))}
          graphic="Next"
          disabled={imageIdx === images.length - 1}
        />
      </div>
      <div className={styles["dot-container"]}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`${styles.dot} ${index === imageIdx ? "tag-chip-active" : "tag-chip"}`}
            aria-label={`Go to photo ${index + 1}`}
            onClick={() => setImageIdx(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
```

- [ ] **Step 4: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run build`
Expected: clean build.

Manual check: `npm run dev`, open `/AboutMe` (Carnival the Cat carousel) and any craft post with an `images` carousel (e.g. one of the `BakingWeeks` posts). Confirm:
- Adjacent slides are now visibly dimmed and scaled down (not invisible) on either side of the active slide.
- A row of small round dots appears below the arrows, one per image; the active one is filled/accent-colored, others are outline-only.
- Clicking a dot jumps directly to that image; Prev/Next still work and still disable at the ends.
- Check in both light and dark mode that dots remain visible/legible.

- [ ] **Step 5: Commit**

```bash
git add src/components/Carousel.tsx src/styles/Carousel.module.css
git commit -m "fix: real coverflow peek and add carousel dot indicators"
```

---

### Task 5: Experience section

**Files:**
- Create: `src/components/ExperienceEntry.tsx`
- Create: `src/styles/ExperienceEntry.module.css`
- Modify: `src/app/Projects/page.tsx` (whole-file rewrite — Experience half only; Projects half still uses the current `SingleProject` calls, updated again in Task 6)
- Modify: `src/app/Projects/Projects.module.css:1-10` (append `.experience-section` / `.projects-header`)

**Interfaces:**
- Consumes: `centeneLeadDescription`, `centeneSeniorDescription`, `ibmBand07Description`, `ibmBand06Description` (existing `string[]` exports from `src/constants/projectvariables.ts` — unchanged); `--color-accent`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-bg` tokens (existing).
- Produces: `ExperienceEntry` component — `import ExperienceEntry from "@/components/ExperienceEntry"`, props `{ role: string; company: string; dates: string; bullets: string[] }`. Consumed by Task 6's rewrite of the same `Projects/page.tsx` file.

- [ ] **Step 1: Create the ExperienceEntry component**

Create `src/components/ExperienceEntry.tsx`:

```tsx
import React from "react"
import styles from "@/styles/ExperienceEntry.module.css"

interface ExperienceEntryProps {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

const ExperienceEntry = ({ role, company, dates, bullets }: ExperienceEntryProps) => {
  return (
    <div className={styles['experience-entry']}>
      <div className={styles['experience-header']}>
        <span className={styles['experience-role']}>{role}</span>
        <span className={styles['experience-company']}>{company}</span>
        <span className={styles['experience-dates']}>{dates}</span>
      </div>
      <ul className={styles['experience-bullets']}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceEntry
```

- [ ] **Step 2: Style the timeline**

Create `src/styles/ExperienceEntry.module.css`:

```css
.experience-entry {
  position: relative;
  padding: 0 0 var(--space-8) var(--space-6);
  border-left: 2px solid var(--color-border);
}
.experience-entry:last-child {
  border-left-color: transparent;
  padding-bottom: 0;
}
.experience-entry::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-accent);
  border: 2px solid var(--color-bg);
}
.experience-header {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-2);
}
.experience-role {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
}
.experience-company {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-accent);
}
.experience-dates {
  font-size: 14px;
  color: var(--color-text-muted);
}
.experience-bullets {
  margin: 0;
  padding-left: var(--space-4);
}
.experience-bullets li {
  color: var(--color-text);
  line-height: 1.75;
  margin-bottom: var(--space-1);
}
```

- [ ] **Step 3: Split Projects/page.tsx — Experience half**

Replace the full contents of `src/app/Projects/page.tsx` with (Projects half unchanged from current `SingleProject` calls — Task 6 replaces this half again):

```tsx
import React from "react"
import SingleProject from "@/components/SingleProject"
import ExperienceEntry from "@/components/ExperienceEntry"
import styles from "./Projects.module.css"
import {
  dotEaterDescription,
  recipixDescription,
  twelveStepsDescription,
  centeneLeadDescription,
  centeneSeniorDescription,
  ibmBand07Description,
  ibmBand06Description
} from "@/constants/projectvariables"

const Projects = () => {
  return (
    <>
      <p className="page-header">Experience</p>
      <div className={styles['experience-section']}>
        <ExperienceEntry
          role="Lead Application Development Engineer"
          company="Centene"
          dates="Sept 2025 - Present"
          bullets={centeneLeadDescription}
        />
        <ExperienceEntry
          role="Senior Application Development Engineer"
          company="Centene / Apex Systems"
          dates="Jan 2025 - Sept 2025"
          bullets={centeneSeniorDescription}
        />
        <ExperienceEntry
          role="Software Developer, Band 07"
          company="IBM"
          dates="Oct 2021 - Jan 2025"
          bullets={ibmBand07Description}
        />
        <ExperienceEntry
          role="Software Developer, Band 06"
          company="IBM"
          dates="Aug 2020 - Oct 2021"
          bullets={ibmBand06Description}
        />
      </div>

      <p className={`page-header ${styles['projects-header']}`}>Projects</p>
      <div className={styles['all-projects-box']}>
        <SingleProject
          projectName={"Dot Eater"}
          description={dotEaterDescription}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          linkText="Play The Game!"
          deployLink="http://dot-eater.herokuapp.com/"
          src="https://www.youtube.com/embed/3pskwXDw2nQ"
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
        />
        <SingleProject
          projectName={"12Steps.video"}
          description={twelveStepsDescription}
        />
      </div>
    </>
  )
}

export default Projects
```

- [ ] **Step 4: Add Experience section layout styles**

Append to `src/app/Projects/Projects.module.css`:

```css
.experience-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: var(--space-6) auto 0;
  padding: 0 var(--space-4);
}
.projects-header {
  margin-top: var(--space-16);
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run build`
Expected: clean build; `/Projects` remains in the static route list.

Manual check: `npm run dev`, open `/Projects`. Confirm:
- "Experience" heading appears first, showing 4 entries (Centene Lead, Centene Senior, IBM Band 07, IBM Band 06) each with role/company/dates and their existing bullet lists, connected by a vertical timeline line with dots.
- "Projects" heading and the 3 existing project cards (Dot Eater, Recipix, 12Steps.video) still render below, unchanged in appearance from before this task.
- Check both light and dark mode — timeline line/dots and text remain legible.

- [ ] **Step 6: Commit**

```bash
git add src/components/ExperienceEntry.tsx src/styles/ExperienceEntry.module.css src/app/Projects/page.tsx src/app/Projects/Projects.module.css
git commit -m "feat: add Experience timeline section, split from Projects"
```

---

### Task 6: Projects grid + tech tag chips

**Files:**
- Modify: `src/constants/projectvariables.ts` (append tag arrays)
- Modify: `src/components/SingleProject.tsx:1-51` (whole-file rewrite — add `tags` prop)
- Modify: `src/styles/SingleProject.module.css` (append `.project-tags`, remove now-redundant `margin-bottom` from `.single-project-box`)
- Modify: `src/app/Projects/page.tsx` (Projects half only — replace the 3 `SingleProject` calls and `.all-projects-box` div added in Task 5, Step 3)
- Modify: `src/app/Projects/Projects.module.css` (replace `.all-projects-box` with `.projects-grid`)

**Interfaces:**
- Consumes: `ExperienceEntry`/Experience section from Task 5 (this task edits the same `Projects/page.tsx` file, Projects half only — Experience half from Task 5 is left untouched).
- Produces: `SingleProject`'s new optional `tags?: string[]` prop — no other file consumes `SingleProject` directly except `Projects/page.tsx`, so this is a leaf-facing change.

- [ ] **Step 1: Add tech tag arrays**

Append to `src/constants/projectvariables.ts` (after `twelveStepsDescription`, before the `centeneLeadDescription` block):

```ts
export const dotEaterTags = ["React", "Node"]

export const recipixTags = ["React Native"]

export const twelveStepsTags = ["Go", "PostgreSQL"]
```

- [ ] **Step 2: Add the `tags` prop to SingleProject**

Replace the full contents of `src/components/SingleProject.tsx` with:

```tsx
import React from "react"
import styles from "@/styles/SingleProject.module.css";

interface SingleProjectProps {
  projectName: string;
  description?: string;
  github?: string;
  src?: string;
  additionalText?: string[];
  linkText?: string;
  deployLink?: string;
  tags?: string[];
}

const SingleProject = ({projectName, description, github, src, additionalText, linkText, deployLink, tags }: SingleProjectProps) => {
  return (
    <div className={styles['single-project-box']}>
      <div className={styles['link-title-align']}>
        <p className="sub-header-red-large">{projectName}</p>
        <div className={styles['project-link-container']}>
          {deployLink ? (
            <a
              className={styles['project-github']}
              target="_blank"
              rel="noopener noreferrer"
              href={deployLink}
            >
              {linkText || "View"}
            </a>
          ) : null}
          {github ? (
            <a
              className={styles['project-github']}
              target="_blank"
              rel="noopener noreferrer"
              href={github}
            >
              Github
            </a>
          ) : null}
        </div>
      </div>
      {tags ? (
        <div className={styles['project-tags']}>
          {tags.map((tag) => (
            <span className="tag-chip" key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
      <p className={styles['project-github']}>{description}</p>
      {additionalText ? additionalText.map((description: string) => {
     return <p className={styles['project-github']} key={description}>- {description}</p>
      })
 : null}
      { src ? <iframe width="560" height="315" src={src}title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={`${styles['video']}`}></iframe> : null }
    </div>
  )
}
export default SingleProject
```

- [ ] **Step 3: Style the tags row and drop the now-redundant card margin**

In `src/styles/SingleProject.module.css`, remove line 6 (`  margin-bottom: var(--space-6);`) from `.single-project-box` — spacing between cards will come from the new `.projects-grid` gap (Step 5) instead, since `SingleProject` is only used for the 3-card grid after this task.

Append to the same file:

```css
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}
```

- [ ] **Step 4: Wire tags into the Projects half of Projects/page.tsx**

In `src/app/Projects/page.tsx`, update the import line to add the three tag constants:

```tsx
import {
  dotEaterDescription,
  recipixDescription,
  twelveStepsDescription,
  dotEaterTags,
  recipixTags,
  twelveStepsTags,
  centeneLeadDescription,
  centeneSeniorDescription,
  ibmBand07Description,
  ibmBand06Description
} from "@/constants/projectvariables"
```

Replace the `<p className={\`page-header ${styles['projects-header']}\`}>Projects</p>` block and everything through the closing `</div>` of `.all-projects-box` (added in Task 5 Step 3) with:

```tsx
      <p className={`page-header ${styles['projects-header']}`}>Projects</p>
      <div className={styles['projects-grid']}>
        <SingleProject
          projectName={"Dot Eater"}
          description={dotEaterDescription}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          linkText="Play The Game!"
          deployLink="http://dot-eater.herokuapp.com/"
          src="https://www.youtube.com/embed/3pskwXDw2nQ"
          tags={dotEaterTags}
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
          tags={recipixTags}
        />
        <SingleProject
          projectName={"12Steps.video"}
          description={twelveStepsDescription}
          tags={twelveStepsTags}
        />
      </div>
```

(The `</>` closing fragment tag and `export default Projects` at the end of the file are unchanged.)

- [ ] **Step 5: Replace the flex box with a responsive grid**

In `src/app/Projects/Projects.module.css`, replace the `.all-projects-box` rule:

```css
.all-projects-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  width: 100%;
  max-width: var(--page-max-width);
  margin: var(--space-6) auto 0;
  padding: 0 var(--space-4);
}
```

with:

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  width: 100%;
  max-width: var(--page-max-width);
  margin: var(--space-6) auto 0;
  padding: 0 var(--space-4);
  align-items: start;
}
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 6: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run build`
Expected: clean build; `/Projects` remains in the static route list.

Manual check: `npm run dev`, open `/Projects` at a desktop width (>768px): confirm the 3 project cards render in a 2-column grid (Dot Eater + Recipix on row 1, 12Steps.video alone on row 2), each showing its tech tag chips under the title/link row. Resize below 768px (or use devtools responsive mode) and confirm it collapses to 1 column. Confirm the Experience section above is unaffected. Check both light and dark mode — tag chips (bordered, muted text) stay legible.

- [ ] **Step 7: Commit**

```bash
git add src/constants/projectvariables.ts src/components/SingleProject.tsx src/styles/SingleProject.module.css src/app/Projects/page.tsx src/app/Projects/Projects.module.css
git commit -m "feat: convert Projects to a responsive grid with tech tag chips"
```
