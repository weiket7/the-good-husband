# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev              # vite dev --port 3000 (Cloudflare Vite plugin dev server)
npm run build             # vite build (client + SSR bundles)
npm run preview
npm run generate-routes   # tsr generate — regenerate src/routeTree.gen.ts by hand
npm run lint               # biome lint
npm run format             # biome format
npm run check               # biome check (lint + format)
npm run deploy               # build then wrangler deploy
```

Database (Drizzle, currently targets local SQLite — see Architecture):
```bash
npm run db:generate   # drizzle-kit generate — create migration from schema
npm run db:migrate
npm run db:push
npm run db:pull
npm run db:studio
```

No test framework is configured in this repo.

Biome, not ESLint/Prettier, is the linter/formatter (`biome.json`): tab indentation, double quotes in JS. `src/routeTree.gen.ts` and `src/styles.css` are excluded from formatting.

## Architecture

**Stack**: TanStack Start (file-based routing via TanStack Router) + React 19, deployed to Cloudflare Workers via `@cloudflare/vite-plugin` + `wrangler.jsonc`. Tailwind v4 is CSS-first — there is no `tailwind.config.js`; theme tokens (custom `brand`/`ink` color scales, `Archivo`/`Manrope` fonts) are declared in an `@theme` block directly in `src/styles.css`, alongside hand-written CSS for the Leaflet map pins.

**Path alias**: `#/*` maps to `./src/*`, declared both in `tsconfig.json` `paths` and as a Node subpath import in `package.json` `imports` — use `#/components/...`, `#/data/...`, `#/types/...` rather than relative paths across directories.

**Routing**: file-based, routes live in `src/routes/`. `src/routes/__root.tsx` is the document shell — head/meta and `<html>/<body>` structure live there; `src/router.tsx` builds the router (`defaultNotFoundComponent` is set there, pointing at `src/components/NotFound.tsx`). `src/routeTree.gen.ts` is auto-generated — don't hand-edit it; it regenerates automatically while `npm run dev`/`build` run, or manually via `npm run generate-routes`.

**Content is static, not DB-backed yet**: `src/data/{brand,outlets,franchise,reviews}.ts` hold the site's actual copy (outlet addresses/hours, franchise FAQ, reviews, etc.), typed against `src/types/content.ts`. There's no CMS or API behind this — edit these files directly to change site content.

**Database**: Drizzle ORM is wired to local `better-sqlite3` for now (`src/db/index.ts`, `DATABASE_URL` in `.env.local`), with a single placeholder `todos` table (`src/db/schema.ts`) not yet used anywhere in the UI. `wrangler.jsonc` has no `d1_databases` binding configured — Cloudflare D1 is the intended production target but the migration hasn't happened; `drizzle.config.ts` still points `dbCredentials` at a plain SQLite `url`, not D1 credentials.

**`design/` is a separate, standalone project** (own `package.json`/`node_modules`, plain Vite + Tailwind v3 + React 18) kept only as the visual/content source of truth from Magic Patterns — it is not part of this app's build. Everything under `src/components/` was manually ported from `design/src/components/` to match it exactly (same class names, same copy, same data shapes); when changing UI, check the `design/` version first to see whether it should be updated there too for consistency, and treat `design/` as reference rather than something to import from at build time.

**SSR + browser-only widgets**: `OutletMap` (`src/components/OutletMap.tsx`) uses `react-leaflet`/`leaflet`, which touch `window` at import time and cannot run during SSR. It's wrapped in `<ClientOnly>` from `@tanstack/react-router` (see `LaundromatSection.tsx`) with a skeleton fallback. Any other browser-only widget (charts, other map/canvas libs, etc.) needs the same treatment to avoid breaking SSR.

**FranchiseForm** (`src/components/FranchiseForm.tsx`) currently fakes submission client-side with `setTimeout` — there's no server function wired up to actually receive franchise inquiries yet.

**AGENTS.md** in the repo root is an auto-generated "TanStack Intent" skills catalog, not hand-maintained project instructions — each entry is a `npx @tanstack/intent@latest load <id>` command that fetches framework-specific guidance (routing, server functions, devtools, deployment, etc.) on demand when working deeply with TanStack Router/Start internals.
