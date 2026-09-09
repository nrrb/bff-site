# Big Friendly Function

Nicholas Bennett’s consulting portfolio, built with Astro, React, and Tailwind CSS. The homepage and six project pages are generated as static HTML; the mobile navigation uses a React island.

## Development

Run `npm install`, then `npm run dev` (http://localhost:4321). Run `npm run build` for a production build and `npm run preview` to review it. Run `node_modules/.bin/tsc --noEmit` for TypeScript checks and `python3 scripts/check-site.py` after building to validate routes, links, metadata, headings, and images. There is no configured lint task.

## Content

Edit `src/data/projects.json` for project descriptions, status, role, decisions, delivered work, planned refinements, contact invitations, and media. `src/pages/projects/[slug].astro` is the shared page template. Each slug generates `/projects/<slug>/index.html`, supporting direct loads and refreshes on static hosting.

Each media item has a reserved `assetPath`. Add an approved image under `public` at that path, set `src` to the public URL, and supply accurate `alt` text and a caption. Leave `src` null for a deliberate placeholder. The loader also falls back to a placeholder if the local file is absent. Images retain their aspect ratios.

See [CONTENT_TODO.md](CONTENT_TODO.md) for the remaining content, media, and optional recordings. Homepage content is in `src/components`; colors and fonts remain in `tailwind.config.mjs` and `src/styles/global.css`.

## Hosting

Astro writes the static site to `dist`. The existing site targets Vercel with build command `npm run build` and output directory `dist`. Publishing and pushing require explicit authorization; a push to the connected main branch may trigger deployment.
