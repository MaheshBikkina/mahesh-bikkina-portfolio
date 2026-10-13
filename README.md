# Portfolio — React + Vite

A minimal, dark-themed single-page developer portfolio built with React and Vite. No UI framework dependencies — pure React, CSS Modules, and a single IntersectionObserver hook for scroll animations.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

---

## Project Structure

```
portfolio/
├── index.html                  # Entry HTML — loads Inter font from Google Fonts
├── vite.config.js
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Composes all sections in order
│   ├── index.css               # Global reset, CSS custom properties, utility classes
│   ├── App.css                 # Minimal root-level overrides
│   ├── hooks/
│   │   └── useFadeIn.js        # IntersectionObserver hook — triggers .fade-in animation
│   └── components/
│       ├── Navbar              # Sticky nav with blur-on-scroll + mobile hamburger
│       ├── Hero                # Full-height landing with animated badge
│       ├── About               # Initials avatar, bio, stat counters, CTA
│       ├── Skills              # Skill tags grouped into 4 categories
│       ├── Experience          # Vertical timeline of work history
│       ├── Projects            # 3-column card grid with hover glow
│       ├── Education           # Two-column education cards
│       ├── Contact             # Centered email CTA + social links
│       └── Footer              # Logo + copyright
```

Each component has a co-located `*.module.css` file — styles are scoped and won't leak between components.

---

## Customising Your Content

All personal data lives as plain arrays/strings at the top of each component file. No config file or CMS — just edit the source directly.

### Personal info & Hero
**File:** `src/components/Hero.jsx`

| Placeholder | Replace with |
|---|---|
| `Your Full Name` | Your actual name |
| `Frontend Developer & UI Engineer` | Your title |
| `"I build fast, accessible..."` | Your tagline |
| `https://github.com/yourusername` | Your GitHub URL |
| `https://linkedin.com/in/yourusername` | Your LinkedIn URL |

### Navbar logo
**File:** `src/components/Navbar.jsx` — change `<YN />` to your own initials.

### About section
**File:** `src/components/About.jsx`
- Edit the two `<p className={styles.bio}>` paragraphs.
- Update the `STATS` array (years of experience, projects, clients).
- Replace `Your Name` in the bio text.

### Work experience
**File:** `src/components/Experience.jsx` — edit the `EXPERIENCE` array:

```js
{
  company:     'Company Name',
  role:        'Your Job Title',
  duration:    'Jan 2023 – Present',
  description: 'One or two sentences about impact.',
  tech:        ['React', 'TypeScript'],
}
```

### Projects
**File:** `src/components/Projects.jsx` — edit the `PROJECTS` array:

```js
{
  name:        'Project Name',
  description: 'What it does.',
  tech:        ['React', 'Node.js'],
  live:        'https://your-live-url.com',  // set to null to hide the external link icon
  repo:        'https://github.com/you/repo',
}
```

### Education
**File:** `src/components/Education.jsx` — edit the `EDUCATION` array.

### Contact & socials
**File:** `src/components/Contact.jsx`
- Update `href="mailto:your@email.com"` with your email address.
- Update the `SOCIALS` array URLs (GitHub, LinkedIn, Twitter/X).

### Footer
**File:** `src/components/Footer.jsx` — replace `Your Name` and the `<YN />` logo initials.

### Resume / CV
Place your PDF at `public/resume.pdf`. The **Resume** button in the navbar already points to `/resume.pdf`.

---

## Design Tokens

All colours are CSS custom properties defined in `src/index.css`. Change one variable to update the entire site:

```css
--bg:         #1C1C1C   /* page background          */
--surface:    #2E2E2E   /* cards, nav background     */
--surface2:   #252525   /* alternate section bg      */
--accent:     #A8E000   /* neon green — primary CTA  */
--text:       #E0E0E0   /* primary text              */
--muted:      #888888   /* secondary / helper text   */
--border:     #3A3A3A   /* dividers, card borders    */
```

To change the accent colour site-wide, update `--accent` (and optionally `--accent-dim` / `--accent-glow`) in that one file.

---

## How Animations Work

| Animation | Mechanism |
|---|---|
| Hero entrance | CSS `@keyframes fadeDown` with staggered `animation-delay` on each element |
| Scroll fade-in | `useFadeIn` hook adds `.visible` class when the section enters the viewport (IntersectionObserver, 15% threshold) |
| Hover glows | `box-shadow: var(--accent-glow)` applied on `:hover` in each component's module CSS |
| Navbar blur | `backdrop-filter: blur(12px)` + `background: rgba(28,28,28,0.92)` applied when `window.scrollY > 40` |

---

## Deployment

The built output (`dist/`) is a standard static site:

| Platform | How |
|---|---|
| **Vercel** | `npx vercel` — auto-detects Vite, zero config needed |
| **Netlify** | Drag & drop `dist/`, or connect the repo (build cmd: `npm run build`, publish dir: `dist`) |
| **GitHub Pages** | Push `dist/` contents to the `gh-pages` branch |
