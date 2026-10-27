# Ritik Negi — Portfolio

[🔗 Live Preview](https://ritik-negi.vercel.app/)

Personal portfolio for Ritik Negi, a full-stack / backend engineer. It covers
experience, production work with measurable outcomes, side projects, skills and
education, with the current resume available as a PDF download.

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
    │   ├── data.ts          # All portfolio content
    │   ├── globals.css      # Design tokens and global styles
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
- **Responsive**: mobile navigation and layouts from 320px up.
- **SEO**: metadata, Open Graph, sitemap and robots.txt.

## 📦 Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/ritikNegi2022/main-portfolio.git
   cd main-portfolio
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Deployment

Deployed on **Vercel**. Set `NEXT_PUBLIC_BASE_URL` to the production URL so the
sitemap and Open Graph tags use the correct domain.
