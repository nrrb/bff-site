# Big Friendly Function

Personal/freelance site for bigfriendlyfunction.com — built with Astro,
React (for interactive bits), and Tailwind CSS.

## Stack

- **Astro** — static site framework, ships zero JS by default
- **React** — used for the header (mobile menu state) via Astro islands
- **Tailwind CSS** — utility-first styling, tokens in `tailwind.config.mjs`
- **Google Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (accents)

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Before you launch — things to edit

1. **Photo:** add your real portrait to `public/images/portrait.jpg`
   (replaces the placeholder referenced in `src/components/Hero.tsx`)
2. **Contact info:** edit `EMAIL` and `SMS_NUMBER` in
   `src/components/Contact.tsx`
3. **Social links:** replace `YOUR_USERNAME` in `src/components/About.tsx`
   and `src/components/Footer.tsx` with your real GitHub/LinkedIn handles
4. **Portfolio projects:** edit `src/data/projects.json` — each entry needs
   a title, description, image path (drop screenshots in
   `public/images/`), tags, and optional link. No HTML editing required.

## Deploying to Vercel

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bff-site.git
   git push -u origin main
   ```
2. In Vercel: **New Project** → import the GitHub repo.
3. Vercel auto-detects Astro — no build config changes needed
   (build command: `astro build`, output dir: `dist`).
4. Add your domain: Project Settings → Domains → add
   `bigfriendlyfunction.com`, then point your registrar's DNS per
   Vercel's instructions (usually an A record + CNAME for `www`).
5. Every push to `main` auto-deploys.

## Adding a new portfolio project

Open `src/data/projects.json` and add a new object to the array:

```json
{
  "title": "Project Name",
  "description": "What it does, in one or two sentences.",
  "image": "/images/project-name.png",
  "tags": ["React", "AI"],
  "link": "https://github.com/you/project-name"
}
```

Drop the matching screenshot into `public/images/`. That's it — no other
files need to change.
