# ⚡ Premium Portfolio — Next.js 14 + TypeScript + Framer Motion

A FAANG-tier personal portfolio inspired by Apple's design philosophy.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables (optional but recommended)
cp .env.example .env.local
# Add your GITHUB_TOKEN for higher API rate limits

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 Customization Checklist

### Required
- [ ] **`lib/data.ts`** — Set `GITHUB_USERNAME` to your GitHub handle
- [ ] **`lib/data.ts`** — Replace `projects[]`, `experiences[]`, `certificates[]` with your real data
- [ ] **`app/layout.tsx`** — Update `metadata` (title, description, twitter handle)
- [ ] **`components/layout/Navbar.tsx`** — Update logo letter and name
- [ ] **`components/layout/Footer.tsx`** — Update social links
- [ ] **`components/ui/CommandPalette.tsx`** — Update social URLs
- [ ] **`components/sections/HeroSection.tsx`** — Update name, tagline, tech stack
- [ ] **`components/sections/ContactSection.tsx`** — Update social handles and email
- [ ] **`components/sections/ContactSection.tsx`** — Wire `handleSubmit` to Resend/EmailJS/Formspree

### Optional
- [ ] **`.env.local`** — Add `GITHUB_TOKEN` for higher GitHub API rate limits (5000 req/hr vs 60)

## 🌐 Environment Variables

```env
# .env.local
GITHUB_TOKEN=ghp_your_token_here   # Optional — increases GitHub API rate limit
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (server component)
│   └── globals.css         # Design tokens + global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── GitHubSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── CommandPalette.tsx   # ⌘K spotlight search
│       ├── LoadingScreen.tsx    # Animated intro screen
│       ├── SectionWrapper.tsx   # Scroll-triggered fade wrapper
│       └── ThemeProvider.tsx    # Dark/light mode context
├── lib/
│   ├── data.ts             # ← YOUR CONTENT GOES HERE
│   ├── github.ts           # GitHub API helpers
│   └── utils.ts            # cn() helper
└── types/
    └── index.ts            # TypeScript types
```

## 🎨 Design System

CSS variables in `globals.css` control the entire palette:

```css
--bg, --bg-secondary        /* Page backgrounds */
--surface, --surface-hover  /* Glass card backgrounds */
--border, --border-strong   /* Card borders */
--text-primary/secondary/tertiary
--accent                    /* Brand color (sky blue) */
--accent-glow               /* Glow shadow color */
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Open command palette |
| `↑↓` | Navigate commands |
| `↵` | Execute command |
| `Esc` | Close palette |

## 📦 Deploy

```bash
# Vercel (recommended)
npx vercel

# Or build locally
npm run build
npm start
```

## 🔌 Form Integration

In `ContactSection.tsx`, replace the `handleSubmit` mock with your preferred service:

**Resend (recommended)**:
```ts
const res = await fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify(form),
});
```

**Formspree**:
```ts
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```
