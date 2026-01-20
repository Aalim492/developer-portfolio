# Mohd Aalim | Portfolio

A modern, responsive developer portfolio built with Next.js 15, React 19, and Tailwind CSS v4. Features a clean design with dark/light theme support and developer-themed visual elements.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes
- **Fonts:** Inter, JetBrains Mono

## Features

- Responsive design optimized for all devices
- Dark/Light theme toggle
- Smooth scroll navigation
- Developer-themed animated background with code snippets and tech symbols
- Sections: Hero, About, Skills, Projects, Experience & Education, Contact
- Contact form with validation
- SEO optimized with meta tags and Open Graph

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── skills.tsx       # Skills section
│   │   ├── projects.tsx     # Projects section
│   │   ├── experience.tsx   # Experience & Education section
│   │   └── contact.tsx      # Contact section
│   ├── ui/                  # shadcn/ui components
│   ├── dev-background.tsx   # Developer-themed background
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer component
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Dark/Light mode toggle
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Personal Information

Update the following files to customize with your information:

- `components/sections/hero.tsx` - Name, title, tagline, social links
- `components/sections/about.tsx` - Bio and highlight cards
- `components/sections/skills.tsx` - Technical skills
- `components/sections/projects.tsx` - Project details
- `components/sections/experience.tsx` - Work experience and education
- `components/sections/contact.tsx` - Contact information

### Theme Colors

Modify the color tokens in `app/globals.css` to change the color scheme:

```css
:root {
  --primary: oklch(0.55 0.18 250);
  /* ... other tokens */
}
```

## Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email:** aalimmohd01@gmail.com
- **LinkedIn:** [Mohd Aalim](https://linkedin.com/in/mohdaalim)
- **GitHub:** [mohdaalim](https://github.com/mohdaalim)

---

Built with Next.js and deployed on Vercel.
