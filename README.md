# Ritik Negi — Portfolio

[🔗 Live Preview](https://ritik-negi.vercel.app/)

Personal portfolio for Ritik Negi, a full-stack / backend engineer. It covers
experience, production work with measurable outcomes, side projects, skills and
education, with the current resume available as a PDF download.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for how content, components and logic
fit together.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Formatting**: Prettier
- **Deployment**: Vercel
- **Linting**: ESLint

## 📁 Project Structure

```sh
.
├── README.md                # Project documentation
├── components.json          # Component metadata
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── public
│   ├── Resume.pdf           # Downloadable resume
│   └── robots.txt
└── src
    ├── app
    │   ├── data/            # All portfolio content (one file per project)
    │   ├── globals.css      # Tailwind layers and component classes
    │   ├── layout.tsx       # Root layout, fonts and metadata
    │   ├── page.tsx         # Home page composition
    │   ├── not-found.tsx    # 404 page
    │   ├── projects
    │   │   └── [slug]
    │   │       ├── layout.tsx
    │   │       └── page.tsx
    │   └── sitemap.ts       # Sitemap
    ├── assets               # Project preview images
    ├── components
    │   ├── sections         # Page sections (hero, work, skills, ...)
    │   └── ui               # Shared UI components
    └── lib                  # Utilities and site config
```

## 🌟 Features

- **Recruiter-focused content**: impact stats, quantified outcomes and a one-click resume download.
- **Dark and light themes**: both palettes are designed, not inverted.
- **Dynamic project pages**: individual case-study pages for each project.
- **Ask-me assistant**: streams answers about my work from a FastAPI backend that grounds each reply in a curated knowledge base, rendered as basic markdown.
- **Responsive**: mobile navigation and layouts from 320px up.
- **SEO**: metadata, Open Graph, sitemap and robots.txt.

## 📦 Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/b14nk-dev/main-portfolio.git
   cd main-portfolio
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Point the assistant at the backend (optional locally — it defaults to
   `http://localhost:8000`):

   ```sh
   cp .env.example .env.local
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Deployment

Deployed on **Vercel**; every push to `main` triggers a production deployment.

Set these project environment variables (Settings → Environment Variables):

| Variable | Example | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_URL` | `https://ritik-negi.vercel.app` | Sitemap and Open Graph URLs |
| `NEXT_PUBLIC_API_URL` | `https://your-backend-host` | Base URL of the ask-me API |

`NEXT_PUBLIC_API_URL` is read at build time, so add or change it before a
redeploy. The backend must also allow the site origin in its CORS list
(`https://ritik-negi.vercel.app` and `http://localhost:3000` are already
allowed in `portfolio-backend/main.py`).

If `NEXT_PUBLIC_API_URL` is missing, the build still succeeds and the rest of
the site works; only the ask-me assistant fails, with an inline error and an
email fallback.
