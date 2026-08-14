# vince-94.github.io

Personal CV/portfolio site, built with [Astro](https://astro.build). Served at [vince-94.github.io](https://vince-94.github.io/).

This project follows one rule throughout: **personal content lives under `src/content/` and `src/data/`; everything else is site code.** You should never need to touch a `.astro` file just to update your bio, add a job, or list a new project — and anything under `content/`/`data/` should never contain layout or styling logic. If you're ever unsure where something goes, that's the test.

## Local setup

Requires Node.js 22+. It's installed via [nvm](https://github.com/nvm-sh/nvm), kept entirely inside `~/.nvm` — no system packages, nothing added to shell startup files. Node is only on `PATH` in a terminal after you explicitly load nvm in that session (like `source venv/bin/activate` for a Python virtualenv).

```sh
# one-time, only if nvm itself isn't installed yet:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# every time you open a new terminal and want Node available here:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 22   # first time on a machine: nvm install 22
```

Then, from the project root:

```sh
npm install       # install dependencies
npm run dev       # start local dev server at localhost:4321, live-reloads on save
npm run build     # production build to ./dist/
npm run preview   # serve the production build locally, to sanity-check before pushing
npx astro check   # type-check + validate content against its schemas
```

## Where to edit what

### Your content (safe to edit freely, no code knowledge needed)

| What                                                                                  | File(s)                     | Notes                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name, tagline, meta description, keywords, favicon emoji, social handles              | `src/data/site.ts`          | Plain object, edit the values directly.                                                                                                                                                                                                                                                                                                                                             |
| Work experience, education, skills, languages, the two "team project" blurbs on `/cv` | `src/data/resume.yaml`      | YAML, so `#` comments work — e.g. comment out a job instead of deleting it. Follows the [JSON Resume](https://jsonresume.org/schema/) field names. Validated against `src/data/resume.ts` on every build — a typo in a required field fails the build with a clear error rather than silently breaking the page.                                                                    |
| Full project write-ups (shown on `/projects`)                                         | `src/content/projects/*.md` | One file per project. Frontmatter: `title`, `description`, `img` (path to a cover image), `importance` (number — lower sorts first). Body is Markdown; images referenced as `./images/...` get automatically optimized. To add a project: drop a new `.md` file in this folder (plus its images in `images/`) — no other file needs to change.                                      |
| Reading list (shown on `/books`)                                                      | `src/content/books/*.md`    | Frontmatter: `title`, `author`, `cover`, `olid`/`isbn` (optional, for reference), `categories`/`tags` (space- or comma-separated), `buy_link` (optional), `started`/`finished` (optional dates), `released` (year), `stars` (0–5), `status` (`Planned` / `Reading` / `Finished`). Body is the review text — leave it as a short placeholder line until you've actually written one. |
| GitHub repos shown on `/repos`                                                        | `src/data/repositories.ts`  | Just a list of `"owner/repo"` strings. Star counts/descriptions are fetched live from the GitHub API at build time, not stored here.                                                                                                                                                                                                                                                |
| CV PDF, background video                                                              | `public/`                   | Static files, served as-is at the root URL (e.g. `/CV_Ruotolo_Vincenzo.pdf`).                                                                                                                                                                                                                                                                                                       |
| Profile photos, small logos                                                           | `src/assets/`               | Imported into layouts/components and automatically optimized (resized, converted to WebP) at build time.                                                                                                                                                                                                                                                                            |
| About page bio text                                                                   | `src/pages/index.md`        | The one page whose main content lives outside `src/content/`, since there's only ever one About page — everything above the horizontal rule in frontmatter is layout wiring, everything below is your words.                                                                                                                                                                        |

**The rule for adding new content types going forward:** a growing list of documents with their own prose (like projects/books) → a new collection in `src/content.config.ts`. A single structured record (like the resume) → YAML/JSON + a matching Zod schema in `src/data/`. A small fixed list (like the repos) → a plain typed file in `src/data/`.

### Site code (layout, styling, structure — not personal data)

| What                                                            | File(s)                                                                                                                                                                           |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content collection schemas (what fields projects/books require) | `src/content.config.ts`                                                                                                                                                           |
| Page templates                                                  | `src/pages/*.astro`, `src/pages/*.md`                                                                                                                                             |
| Shared page chrome (`<head>`, nav, footer wrapper)              | `src/layouts/BaseLayout.astro`                                                                                                                                                    |
| About page layout (photo + bio panel + socials arrangement)     | `src/layouts/AboutLayout.astro`                                                                                                                                                   |
| Nav bar, footer, social icon row, project/book/repo cards       | `src/components/*.astro`                                                                                                                                                          |
| Colors, fonts, spacing (design tokens)                          | `src/styles/global.css` — everything else styles itself off the CSS custom properties defined at the top of this file, so a palette change here cascades everywhere automatically |
| Build/deploy config                                             | `astro.config.mjs`, `.github/workflows/deploy.yml`                                                                                                                                |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: it builds the site with `npm run build` and publishes `dist/` via GitHub Pages' native Actions integration — no manual build step, no `gh-pages` branch to manage. The repo's Settings → Pages → Source must be set to "GitHub Actions" (one-time setting, not something this workflow file can set for you).

## Verifying a change before pushing

1. `npm run dev` and click through the pages that changed.
2. `npx astro check` — catches type errors and content that doesn't match its schema (e.g. a book missing a required field).
3. `npm run build` — the real test; `astro check` doesn't catch everything a build does (e.g. broken image paths in Markdown).
4. `npm run preview` — serves the actual production build, closest to what Pages will show.
