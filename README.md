# Ann-Marie Kemp — Portfolio

Personal portfolio site built with Next.js (App Router), statically exported and hosted on Amazon S3.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

- **Craft posts** live as MDX files under `src/app/PostPage/<category>/<slug>.mdx`, one folder per category (`baking`, `weaving`, `crochet`, `knitting`, `paper`, `spinning`). Each post's frontmatter (`title`, `slug`, `image`, `category`, optional `images` for a carousel, optional `rotate`) is compiled via `next-mdx-remote` in `src/hooks/postHooks.ts`.
- Post images live under `public/images/posts/<category>/<slug>/`.
- Project descriptions live in `src/constants/projectvariables.ts`.

## Building

```bash
npm run build
```

This produces a fully static export in `out/` (`output: 'export'` in `next.config.mjs`) — no Node server is required to host it. `trailingSlash: true` is set so routes emit `<route>/index.html`, which is what makes folder-style URLs (e.g. `/AboutMe/`) resolve correctly on S3's static website hosting.

## Deploying to S3

The site deploys to the `a-mkemp.com` S3 bucket (see the site's DNS/bucket setup — this isn't managed from this repo). To deploy:

1. Install and configure the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) with credentials that have write access to the target bucket (`aws configure`).
2. Confirm the bucket has **static website hosting** enabled, with `index.html` as the index document and `404.html` as the error document.
3. Run:

   ```bash
   S3_BUCKET=a-mkemp.com npm run deploy
   ```

   This runs `next build` and syncs the resulting `out/` directory to the bucket via `aws s3 sync --delete` (removing files in the bucket that no longer exist locally).

The bucket name is passed via the `S3_BUCKET` environment variable rather than hardcoded, so nothing AWS-account-specific lives in this repo. There is no CI/CD — deploys are manual, run from your own machine.

If the site sits behind CloudFront, invalidate the distribution's cache after deploying (`aws cloudfront create-invalidation --distribution-id <id> --paths "/*"`) — this repo doesn't manage a CloudFront distribution, so that's a separate manual step if applicable.
