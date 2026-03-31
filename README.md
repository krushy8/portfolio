# My Portfolio

A clean developer portfolio built with Next.js, Tailwind CSS, and deployed on Vercel.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customising Your Portfolio

### Your name & info
- **`src/app/layout.tsx`** — update the `title` and `description` in metadata
- **`src/components/Nav.tsx`** — update "Your Name" in the nav
- **`src/app/page.tsx`** — update the hero headline and subheading

### About page
Edit the `ABOUT` object at the top of **`src/app/about/page.tsx`**:
- `name`, `role`, `location` — your details
- `bio` — array of paragraphs about yourself
- `skills` — grouped by category
- `links` — GitHub, LinkedIn, email, etc.

### Projects page
Edit the `PROJECTS` array at the top of **`src/app/projects/page.tsx`**:
- Add a new object per project
- Fill in `title`, `description`, `tags`, `year`, `url` (GitHub), and optionally `live`

---

## Deploying to Vercel

### Option A — GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done!

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Custom domain
In your Vercel project dashboard → Settings → Domains → add your domain.

---

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout + nav
    page.tsx         # Home / hero
    globals.css      # Global styles + fonts
    about/
      page.tsx       # About page
    projects/
      page.tsx       # Projects page
  components/
    Nav.tsx          # Navigation bar
```

## Tech Stack
- [Next.js 14](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com) for hosting
