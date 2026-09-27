# Harini Raamiya Bala — portfolio

Personal site for Harini Raamiya Bala, Cost & Management Accountant (FP&A, management
reporting, R2R). React 19 + Vite 8, no UI framework, no runtime dependencies beyond React.

## Run it

```bash
npm install     # once
npm run dev     # http://localhost:5173
npm run build   # production build into dist/
npm run preview # serve the built site locally
npm run lint
```

## Deploying to Vercel

The Vercel CLI is installed locally as a dev dependency, so no global install is needed.
Logging in opens a browser and must be done by you, in a real terminal:

```bash
npx vercel login      # one time — pick your email or GitHub
npm run deploy        # preview deployment, gives you a temporary URL
npm run deploy:prod   # production deployment
```

The first `npm run deploy` asks a few setup questions. The answers:

| Question | Answer |
| --- | --- |
| Set up and deploy? | `y` |
| Which scope? | your own account |
| Link to existing project? | `n` |
| Project name | `harini-bala` (or anything — it becomes part of the URL) |
| In which directory is your code located? | `./` |
| Want to modify the settings? | `n` — `vercel.json` already sets framework, build command and output directory |

**After the first production deploy**, put the real URL in three places so that link previews
and Google get it right — they currently point at a placeholder `harini-bala.vercel.app`:

- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`, and `url` in the JSON-LD
- `public/sitemap.xml` — both `<loc>` entries
- `public/robots.txt` — the `Sitemap:` line

`src/data/content.js` has a `site.url` field for the same value.

Git is not set up here. The CLI deploys fine without it; if you later want push-to-deploy,
`git init`, push to GitHub, and import the repo from the Vercel dashboard.

## Editing the content

**All the words live in [`src/data/content.js`](src/data/content.js)** — headline, intro, stats,
the project case study, impact items, skills, experience bullets, education, about, contact.
Edit that file and nothing else to change copy. The components read from it.

## Swapping the photo

`public/harini.jpg` is a 900×1181 crop of the supplied headshot, and
`public/harini-square.jpg` is a 600×600 square crop of the same picture. To replace either,
drop in a new file at the same path and size. The hero portrait's size is the `width` in
`.hero__portrait` in [`src/components/Hero.css`](src/components/Hero.css).

The share card `public/og.png` embeds the portrait, so regenerate it after a photo change —
the script that builds it is in the project history, or any 1200×630 image will do.

## Updating the résumé

Replace `public/Harini_Raamiya_Bala.pdf`, then regenerate the mobile preview image:

```bash
pdftoppm -png -r 150 -f 1 -l 1 public/Harini_Raamiya_Bala.pdf /tmp/resume
python3 -c "from PIL import Image; im=Image.open('/tmp/resume-1.png').convert('RGB'); \
  im.thumbnail((800,1200)); im.save('public/resume-preview.jpg','JPEG',quality=80,optimize=True)"
```

## The Finance KPI Dashboard demo

`public/projects/finance-kpi-dashboard.html` is a self-contained copy of the dashboard, served
from this site and embedded live on the page. `public/projects/Finance-KPI-Dashboard.xlsm` is
the source Excel model, offered as a download.

The copy does **not** update itself when the original Claude artifact is edited — after changing
the artifact, re-export it and overwrite that HTML file.

Because the demo is same-origin, the site's theme toggle also sets `data-theme` inside the
iframe, so the dashboard switches between light and dark along with the page
(see `syncFrame` in [`src/hooks/useTheme.js`](src/hooks/useTheme.js)).

## Layout of the code

```
public/            résumé PDF, preview image, portrait, share card, the dashboard demo
src/data/          content.js — every word on the site
src/hooks/         theme, scroll reveal, active nav section, stat count-up
src/components/    one component + one stylesheet per section
src/index.css      design tokens, reset, shared primitives, print styles
```

Colours are defined once as custom properties on `:root` in `src/index.css`, with dark
overrides under both `prefers-color-scheme` and `[data-theme="dark"]`. The accent matches the
dashboard's own, so the embedded demo doesn't look pasted in.

## The background

[`src/components/Ambient.jsx`](src/components/Ambient.jsx) paints the page's atmosphere: a deep
gradient ground, three slowly drifting colour fields, a faint ledger grid, and a glow that
follows the pointer. It is one fixed layer at `z-index: -1` with `pointer-events: none`, so it
never intercepts a click.

The pointer glow is a single GPU-composited element moved with a `transform`, and mouse samples
are coalesced into one `requestAnimationFrame` per frame — fast movement cannot queue up work.
Surfaces above it are deliberately translucent (`--surface` carries an alpha) with a small
`backdrop-filter`, which is what makes cards light up as the cursor passes behind them.

The `--ambient-*` tokens in `src/index.css` control the whole effect: `--ambient-strength` for
how bold the colour fields are, `--ambient-glow` for the cursor glow's colour and intensity.
Everything here is disabled under `prefers-reduced-motion: reduce`.

## Notes

- `npm audit` reports vulnerabilities inside the Vercel CLI's dependency tree. The CLI is a
  dev-only tool and none of it ships to the site; the site's own runtime is React alone.
- The site is a single page with anchor navigation — no router, so `vercel.json` deliberately
  has no SPA catch-all rewrite (one would shadow the dashboard demo at its own URL).
