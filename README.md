# Hirusha Dinil – Portfolio

A modern, high-performance developer portfolio built with **Astro 4**, **React 19**, and **Tailwind CSS 4**. This site showcases my projects, skills, and experience with smooth animations, responsive design, and optimized performance through Astro's island architecture.

**Live Site**: https://dinilr.com
**Deployed on**: Cloudflare Workers

## ✨ Features

- **Lightning-fast performance** with Astro's partial hydration (island architecture)
- **Interactive project gallery** with detailed case study pages
- **Smooth animations** using Framer Motion, GSAP with ScrollTrigger, and Lenis scroll
- **Responsive, mobile-first design** optimized for all devices
- **Archive section** showcasing previous portfolio versions
- **Dedicated contact page** with multiple contact methods
- **Dark mode design** with carefully chosen color palette
- **Comprehensive project content** with sections for challenge, solution, technical details, and results

## 🛠️ Tech Stack

### Core Framework
- **Astro 4** – Static site generation with island architecture
- **React 19** – UI components with selective client-side hydration

### Styling & CSS
- **Tailwind CSS 4** – Utility-first CSS with Vite plugin
- **Custom Fonts** – PP Neuemontreal for distinctive typography

### Animation & Interactivity
- **Framer Motion** (v12.23.0) – React component animations and transitions
- **GSAP 3** (v3.13.0) – Advanced timeline animations and scroll triggers
- **@studio-freight/lenis** (v1.0.42) – Smooth, physics-based scrolling
- **split-type** – Text splitting for character-level animations
- **react-intersection-observer** – Scroll-triggered animations

### Developer Experience
- **TypeScript** – Full type safety throughout the codebase
- **React Icons** – Comprehensive icon library
- **Vite** – Lightning-fast build tool integration with Astro

## 📁 Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        # Root layout with metadata and structured data
│   ├── pages/
│   │   ├── index.astro             # Home page with hero, featured projects, about
│   │   ├── contact.astro           # Contact page
│   │   ├── archive.astro           # Archive of previous portfolio versions
│   │   └── work/
│   │       ├── index.astro         # All projects gallery
│   │       └── [slug].astro        # Dynamic project detail pages
│   ├── components/
│   │   ├── Header.tsx              # Hero section with animated text (GSAP)
│   │   ├── Navbar.tsx              # Navigation with smooth scroll
│   │   ├── Footer.tsx              # Footer with contact info
│   │   ├── ProjectItem.tsx         # Project list item with hover effect
│   │   ├── ProjectPage.tsx         # Detailed project page with sections
│   │   ├── Projects.astro          # Featured projects carousel
│   │   ├── ContactContent.tsx      # Contact page content with animations
│   │   ├── AboutMe.tsx             # About section
│   │   ├── AnimatedText.tsx        # Text animation wrapper
│   │   ├── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   │   ├── CustomCursor.tsx        # Custom cursor interaction
│   │   ├── MagneticWrapper.tsx     # Magnetic button effect
│   │   ├── ArchiveItem.tsx         # Archive portfolio item
│   │   └── ErrorBoundary.tsx       # Error boundary for React
│   ├── data/
│   │   ├── projects.ts             # Project data with TypeScript interfaces
│   │   └── ArchiveData.ts          # Previous portfolio versions
│   ├── utils/
│   │   └── slugify.ts              # URL slug generation
│   └── styles/
│       └── globals.css             # Global styles and custom font imports
├── public/
│   ├── fonts/                      # Custom fonts (PP Neuemontreal)
│   ├── workImages/                 # Project images organized by project
│   └── [other assets]
├── dist/                           # Production build output
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs             # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── wrangler.toml                   # Cloudflare Workers configuration
└── package.json                    # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lxnid/me.git
cd me

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Development Commands

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run deploy     # Deploy to Cloudflare Workers
```

## 🏗️ Astro Island Architecture

This portfolio uses **Astro's island architecture** for optimal performance:

- **Zero JavaScript by default**: Static HTML pages with no hydration overhead
- **Selective Hydration**: React components only load JavaScript when needed using `client:` directives:
  - `client:only="react"` – Components that require browser APIs (cursor, animations)
  - `client:visible` – Components that hydrate when visible in viewport
  - `client:load` – Components that hydrate on page load

### Example Client Directive Usage

```astro
<!-- Hydrate on page load -->
<Navbar client:load />

<!-- Hydrate when visible -->
<Projects client:visible />

<!-- Browser-only component -->
<CustomCursor client:only="react" />
```

This approach dramatically reduces JavaScript bundle size and improves Core Web Vitals.

## 📝 Project Data Structure

Projects are defined in `src/data/projects.ts` with TypeScript interfaces:

```typescript
interface Project {
  id: number;
  title: string;
  image: string;                    // Main hero image
  galleryImage?: string;            // Hover preview image
  link?: string;                    // External project link
  description: string;
  headline: string;                 // Short tagline
  technologies: string[];
  date: string;
  role: string;
  sections?: ProjectSection[];      // Detailed case study sections
  githubUrl?: string;               // GitHub repository link
}

interface ProjectSection {
  title: string;
  content: string | string[];       // Supports single or multiple paragraphs
  list?: string[];                  // Optional bullet points
}
```

### Adding a New Project

1. **Add project data** to `src/data/projects.ts`:
   ```typescript
   {
     id: 7,
     title: "Project Title",
     image: "/workImages/project-name/hero.jpg",
     galleryImage: "/workImages/project-name/gallery.jpg",
     description: "Short description",
     headline: "Catchy subtitle",
     technologies: ["React", "TypeScript", "Tailwind CSS"],
     date: "2025",
     role: "Full Stack Developer",
     sections: [
       {
         title: "Challenge",
         content: "Description of the challenge..."
       }
     ]
   }
   ```

2. **Add images** to `public/workImages/project-name/`

3. **Images are automatically included** in the gallery and dynamic routes

## 🎨 Design System

### Color Palette

- **Background**: `#000000` (pure black)
- **Text Primary**: `#dddddd` (light gray)
- **Text Secondary**: `text-neutral-400` through `text-neutral-700`
- **Borders**: `border-neutral-700` to `border-neutral-800`
- **Accents**: Tech-specific colors (React blue, TypeScript blue, etc.)

### Typography

- **Display Font**: PP Neuemontreal (weights: 400, 500, 700)
- **Body Font**: PP Neuemontreal with fallback to system fonts
- **Responsive sizing**: `text-sm` → `md:text-lg` → `lg:text-xl` patterns

### Animation Patterns

#### Framer Motion Variants

Common animation patterns used throughout:

```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

#### GSAP Scroll Animations

The Header component uses GSAP's ScrollTrigger for text animations that respond to scroll position:

```typescript
gsap.fromTo(element,
  { y: 0, opacity: 1 },
  {
    y: 500,
    opacity: 0,
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "+=1200",
      scrub: true
    }
  }
);
```

## 🚢 Deployment

### Cloudflare Workers

This portfolio is deployed on **Cloudflare Workers** for global edge performance.

**Configuration**: `wrangler.toml`

**Deploy to production**:
```bash
npm run deploy
```

This runs `npx wrangler deploy`, which:
1. Builds the Astro site to `dist/`
2. Uploads static assets to Cloudflare
3. Deploys the worker script

**Environment**: `wrangler.toml` is configured to:
- Serve static assets from the `dist` directory
- Set site URL to `https://dinilr.com`
- Use production compatibility date

## 📊 Performance Optimizations

- **Astro's partial hydration** reduces JavaScript by ~70% vs traditional SPAs
- **Lazy loading** for images with `loading="lazy"`
- **Static generation** for all routes (no runtime rendering)
- **CSS Vite plugin** with Tailwind 4 for optimized stylesheets
- **Code splitting** for dynamic imports where needed
- **Image optimization** through proper sizing and format selection

## 🔗 Contact & Social

- **Email**: offbeat-zombies.3q@icloud.com
- **Phone**: +94 74 322 8881
- **LinkedIn**: https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/
- **GitHub**: https://github.com/lxnid
- **Portfolio**: https://dinilr.com

## 📄 License

MIT License – Feel free to use this as inspiration for your own portfolio!

## 👤 Author

**Hirusha Dinil**
Creative Developer & Designer
[GitHub](https://github.com/lxnid) · [LinkedIn](https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/) · [Portfolio](https://dinilr.com)

---

> _Handcrafted with ❤️. Migrated from Next.js to Astro for improved performance and developer experience._
