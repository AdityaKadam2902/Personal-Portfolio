# Aditya Kadam — Portfolio

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, case studies authored in MDX.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
Push to GitHub, then import the repo at https://vercel.com/new — zero config needed.
Or run `npx vercel` from this folder.

## Add a new case study
Create a new `.mdx` file in `src/content/projects/`, following the frontmatter shape of the
existing ones (slug, title, summary, employer, status, statusLabel, order, stack). It will
automatically appear on the homepage and get its own `/projects/[slug]` page.

## Edit contact info
- Email: `src/components/Contact.tsx`
- GitHub / LinkedIn links: same file
