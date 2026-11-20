# Architecture

Next.js App Router frontend for the portfolio. Three layers, each depending only
on the one below it.

```
src/app/data/*        content: facts, copy, project entries
      │
src/components/*      presentation: sections compose ui + feature pieces
      │
src/lib/*             logic with no JSX: transport, limits, site config
```

## Layers

**`src/app`** — routes and shell. `layout.tsx` mounts fonts, theme provider and
stylesheets; `metadata.ts` holds SEO metadata; `page.tsx` composes the sections.
`globals.css` keeps the Tailwind directives and component classes, while
`styles/{tokens,base,chrome,print}.css` hold theme variables, element styles,
scrollbars/view transitions and print rules.

**`src/app/data`** — the single source of content. `index.ts` reassembles the
`DATA` object (header, stats, about, experience, skills, education, projects) and
exports `getProjectData()`. One file per project lives in `data/projects/` and is
registered by display title in `data/projects/index.ts`. Pages never hard-code
copy that belongs here.

**`src/components/sections`** — one component per page section (`ask-hero`,
`projects`, `experience`, …), all re-exported from `sections/index.ts`. Sections
take their content as props or read `DATA`, and compose `components/ui` primitives
(`Reveal`, `Markdown`) with feature pieces (`components/navbar`,
`components/projects`).

**`src/components/ui`** — small reusable primitives with no content of their own.

**`src/lib`** — framework-free helpers: `site.ts` (site URL), `structured-data.ts`
(JSON-LD), `utils.ts` (`cn`), and `ask/` (assistant transport, rate-limit math and
event types).

## The assistant, end to end

```
sections/ask/chat-panel.tsx     render header, transcript, composer
        │  uses
sections/ask/use-ask-chat.ts    state: warm-up gate, pending, cooldown
        │  calls
lib/ask/client.ts               POST /api/v1/ai/ → NDJSON events
        │  events go to
sections/ask/chat-events.ts     token/followups/links/rate_limit/error/done
        └→ apply-failure.ts     turns failures into retryable rows
```

`use-warmup.ts` calls `GET /api/v1/ai/warmup` once on mount and keeps the panel
closed until the host answers (free hosting sleeps when idle).

## Common changes

- **Copy or facts** — edit the matching file in `src/app/data/`; no component
  changes are needed.
- **New project** — add `data/projects/<name>.ts` and register it in
  `data/projects/index.ts`. The section and `/projects/[slug]` pick it up.
- **Change the assistant** — UI in `sections/ask/`, behaviour in `lib/ask/`.
- **New section** — add `sections/<name>.tsx`, export it from
  `sections/index.ts`, render it in `app/page.tsx`.
- **Theme** — colours in `app/styles/tokens.css`, Tailwind theme in
  `tailwind.config.ts`, component classes in `app/globals.css`.

## Conventions

- Server components by default; `"use client"` only where state or events are
  needed.
- Keep every file at 100 lines or fewer — split by responsibility rather than
  growing a file.
- Import paths stay stable (`@/app/data`, `@/lib/ask`), so files can be split
  behind them without touching callers.
