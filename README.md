# FIT TIME

Landing page for **FIT TIME**, a fitness club. Single-page, responsive, dark theme with a neon accent, available in English and Arabic (RTL).

**Live demo:** https://fit-time-ten.vercel.app/

> This is a trial version. Some content (photos, trainer names, prices, reviews) is placeholder and should be replaced with the club's real data.

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-i18next](https://react.i18next.com/) for English / Arabic
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for the contact form
- [lucide-react](https://lucide.dev/) for icons
- Hosted on [Vercel](https://vercel.com/)

## Getting started

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/mahmoud202202766-creator/fit-time.git
cd fit-time
npm install
npm run dev
```

The site opens at `http://localhost:5173`.

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
public/
  images/            hero, about, team, gallery (all .webp)
  favicon.svg
src/
  components/
    layout/          Navbar, Footer, LanguageSwitcher
    sections/        Hero, WhyChooseUs, About, Team, Pricing,
                     Instagram, Reviews, Contact
    ui/              Button, Card, Logo, SectionTitle, Reveal, ...
  data/
    pricing.ts       plan prices and which features each plan includes
    socials.ts       Instagram link and gallery image paths
    trainers.ts      team photo paths
  i18n/
    index.ts         language setup (also switches text direction)
    locales/
      en.json        English text
      ar.json        Arabic text
  lib/
    schemas.ts       contact form validation
    utils.ts
  index.css          colors and fonts
```

## How to edit the content

You do not need to touch the components for most changes.

### Text (titles, descriptions, names, reviews)

All visible text lives in two files. Edit both so the two languages stay in sync:

- `src/i18n/locales/en.json`
- `src/i18n/locales/ar.json`

Team names and roles are under `team.items`, reviews under `reviews.items`, plan names and features under `pricing`.

### Prices

`src/data/pricing.ts`

```ts
export const plans = [
  { price: 90, highlighted: false, included: 3 },
  { price: 180, highlighted: true, included: 5 },
  { price: 120, highlighted: false, included: 3 },
];
```

- `price`: the monthly price
- `highlighted`: the plan shown with the neon border
- `included`: how many features from the list (from the top) the plan includes; the rest appear greyed out

The currency symbol (`$`) is set in `src/components/ui/PricingCard.tsx`.

### Instagram link

`src/data/socials.ts`

```ts
export const socials = {
  instagram: "https://instagram.com/your-account",
};
```

### Images

Replace files in `public/images/` and keep the same names and the `.webp` format:

| Folder     | Files                        | Used for                            |
| ---------- | ---------------------------- | ----------------------------------- |
| `hero/`    | `hero.webp`                  | Top banner (use a dark, wide photo) |
| `about/`   | `about.webp`, `contact.webp` | About section and contact section   |
| `team/`    | `1.webp` to `6.webp`         | Trainers (portrait, about 3:4)      |
| `gallery/` | `1.webp` to `3.webp`         | Instagram section (square)          |

Keep each image under about 200 KB so the site stays fast. To convert a JPG or PNG:

```bash
cwebp -q 80 -resize 1600 0 input.jpg -o output.webp
```

### Colors and fonts

`src/index.css`

```css
@theme {
  --color-bg: #0f0f0f;
  --color-card: #1a1a1a;
  --color-accent: #c6ff00; /* change the neon color here */
  --font-sans: "Poppins", "Cairo", sans-serif;
}
```

### Logo

The logo is text-based: `src/components/ui/Logo.tsx`. The favicon is `public/favicon.svg`.

## Languages

English is the default. The button in the navbar switches to Arabic, which flips the page to right-to-left. The chosen language is remembered in the browser.

To add or change a translation, edit the matching key in both JSON files. In components, text is read with `t('section.key')` and should not be hard-coded.

## Contact form

The form validates the fields (name, email, phone) and shows a success message, **but it does not send the message anywhere yet**. See `onSubmit` in `src/components/sections/Contact.tsx`.

Options for connecting it:

- **Email:** [Formspree](https://formspree.io/), [Web3Forms](https://web3forms.com/) or [EmailJS](https://www.emailjs.com/)
- **WhatsApp:** open a `wa.me` link with the message pre-filled

Once the destination (email or WhatsApp number) is decided, it is a small change in that one function.

## Deployment

The site is deployed from the `main` branch on Vercel. Every push to `main` triggers a new build automatically.

Vercel settings (auto-detected for Vite):

- Build command: `npm run build`
- Output directory: `dist`

## Credits

Placeholder photos come from free stock sites and should be replaced with the club's own images before launch.
