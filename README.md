# Aura & Artistry — Wedding Styling Portfolio

A modern, single-page portfolio for a wedding styling brand. Built with React + Vite, styled with a refined palette and smooth section reveals. Ready for Netlify deployment.

## Features
- Polished hero, About, Portfolio, Highlights ("Why Work With Me"), Testimonials, Contact, and Footer sections
- Lazy-loaded images with graceful SVG placeholders
- Smooth reveal on scroll
- Mobile-first responsive layout

## Tech Stack
- React 18 + Vite
- Vanilla CSS (no heavy frameworks)

## Local Development
```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Project Structure
```
/ (root)
├─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ styles.css
│  └─ components/
│     ├─ Hero.jsx
│     ├─ About.jsx
│     ├─ Portfolio.jsx
│     ├─ Highlights.jsx
│     ├─ Testimonials.jsx
│     ├─ Contact.jsx
│     └─ Footer.jsx
└─ public/
   └─ images/
      ├─ vala-hero.jpg (hero image)
      ├─ portfolio-ethnic.jpg
      ├─ portfolio-festive.jpg
      ├─ portfolio-modern.jpg
      ├─ portfolio-candid.jpg
      ├─ testimonial-1.jpg (optional)
      └─ testimonial-2.jpg (optional)
```

## Content Notes
- Update copy inside the components in `src/components/`.
- Testimonials support optional images per card. Place under `public/images/` and reference by relative path (e.g., `/images/testimonial-1.jpg`).
- The page title and favicon are configured in `index.html`, and `App.jsx` also sets `document.title` on mount.

## Deploying to Netlify
1. Build the project: `npm run build`
2. In Netlify, set:
   - Base directory: `./`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Or drag-and-drop the `dist/` folder to Netlify.
4. Configure a custom domain in Netlify Domain settings.

## SEO & Social (optional)
Add meta tags in `index.html`:
- `meta name="description" content="..."`
- `meta property="og:title"`, `og:description`, `og:image`, `og:url`

## License
© 2025 Aura & Artistry. All rights reserved.
# aura-and-artistry
