# Content still to supply

Project copy and media live in `src/data/projects.json`. Each entry generates both its gallery card and `/projects/<slug>/` page. Search for `TODO_CONTENT` and `TODO_MEDIA`.

For each media item, place the approved image at `public` + `assetPath`, set `src` to that asset path, and write descriptive `alt` text and a factual caption. Keep `src: null` until supplied. Missing local files also render a placeholder, never a broken image. No layout edits are needed.

## Highest priority

1. Real project screenshots, beginning with OG Blacman and Medium Talk.
2. Confirm contribution/credits and the project details listed below, especially the original Kellogg workflow.
3. New coworking-office portrait when available; the current real photograph remains.

| Page / field | Intended asset path | What to supply |
| --- | --- | --- |
| Homepage / Hero portrait | `public/images/portrait.jpg` | New coworking-office portrait. |
| Homepage / Contact | None | Verified WhatsApp destination, only if this option should return. Existing handle was unverified and omitted. |
| OG Blacman / media: Desktop hero screenshot | `public/images/projects/og-blacman/desktop-hero.png` | Show the real desktop composition and artist identity. |
| OG Blacman / media: Phone layout and music player | `public/images/projects/og-blacman/phone-player.png` | Show how the mobile composition presents music and playback controls. |
| OG Blacman / contentTodos and related copy fields | `src/data/projects.json` | Confirm music-player behavior, signup provider, and any other integrations before describing them as delivered. |
| OG Blacman / contentTodos and related copy fields | `src/data/projects.json` | Supply role boundaries, collaborator credits, and the desktop/mobile walkthrough explanations. |
| Medium Talk / media: Phone view with a real conversation prompt | `public/images/projects/medium-talk/conversation-prompt.png` | Show an actual prompt from the app, with enough interface context to understand how it is used. |
| Medium Talk / contentTodos and related copy fields | `src/data/projects.json` | Describe the actual prompt flow and implementation choices. Attendance, feedback, and measured outcomes have not been supplied. |
| Kellogg Board Fellows Matcher / media: Original matching interface | `public/images/projects/kellogg-matcher/original-interface.png` | Show the original tool, using fictional fellows and placements. |
| Kellogg Board Fellows Matcher / media: Planned replacement interface | `public/images/projects/kellogg-matcher/refreshed-interface.png` | Reserved for the independent refresh once it exists. This is not a delivered interface. |
| Kellogg Board Fellows Matcher / media: Sample matching results | `public/images/projects/kellogg-matcher/matching-results.png` | Use fictional data only; show the relationship between ranked input and placement output. |
| Kellogg Board Fellows Matcher / contentTodos and related copy fields | `src/data/projects.json` | Confirm my original contribution boundaries and organizational collaborators. |
| Kellogg Board Fellows Matcher / contentTodos and related copy fields | `src/data/projects.json` | Document the original preference-input format, matching rules, and export behavior; repository retrieval failed during this update. |
| Poster Slicer / media: Current page-grid preview | `public/images/projects/poster-slicer/page-grid.png` | Show a real image divided into the pages used to make the poster. |
| Poster Slicer / media: Exported poster pages | `public/images/projects/poster-slicer/exported-pages.png` | Show real output from the current tool, using an image suitable for public display. |
| Poster Slicer / contentTodos and related copy fields | `src/data/projects.json` | Verify image input, scale and paper settings, preview controls, and export format; repository retrieval failed during this update. |
| Rekordbox Bass Notes / media: Bass analysis output | `public/images/projects/rekordbox-bass-notes/analysis-output.png` | Show actual output with suitable sample track data. |
| Rekordbox Bass Notes / media: Resulting notes in Rekordbox | `public/images/projects/rekordbox-bass-notes/rekordbox-notes.png` | Show how the written results appear in Rekordbox, using suitable sample track data. |
| Rekordbox Bass Notes / contentTodos and related copy fields | `src/data/projects.json` | Confirm the analysis fields, database fields, setup requirements, and supported versions before publishing usage instructions. No compatibility or performance guarantees are supplied. |
| Dancefloor Bass Analyzer / media: Track library and detail view | `public/images/projects/dancefloor-bass-analyzer/track-library.png` | Show the current development build and a selected track’s analysis. |
| Dancefloor Bass Analyzer / media: Analysis profile editor | `public/images/projects/dancefloor-bass-analyzer/profile-editor.png` | Show the current profile controls once their readiness is confirmed. |
| Dancefloor Bass Analyzer / contentTodos and related copy fields | `src/data/projects.json` | Confirm the current readiness of local processing, adjustable profiles, and responsive analysis, with one concrete decision and example for each. |

## Optional media, only when ready

| Page / field | Intended asset path | What to supply |
| --- | --- | --- |
| OG Blacman / additional media | `public/images/projects/og-blacman/interaction.mp4` | Short approved interaction recording; add no player until a real asset and accessible alternative exist. |
| Medium Talk / additional media | `public/images/projects/medium-talk/event.jpg` | Supplied event photo suitable for public use; optional. |
| Poster Slicer / additional media | `public/images/projects/poster-slicer/before-after.png` | Comparison only after the planned refresh is delivered. |
| Dancefloor Bass Analyzer / additional media | `public/images/projects/dancefloor-bass-analyzer/interaction.mp4` | Optional current-build recording, clearly labeled in development. |

The OG Blacman static media slots provide room for a future annotated desktop/mobile walkthrough. Add explanations in the captions and decisions first. Interactive hotspots are outside this update.

Public GitHub pages were inspected where retrievable. The supplied brief remains the factual baseline; no unverified integrations, outcomes, compatibility claims, or release status were added.
