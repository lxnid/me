# CLAUDE.md - AI Assistant Guide for Portfolio Project

## Project Overview

This is a modern, interactive developer portfolio website for **Hirusha Dinil**, built with Next.js 15, React 19, and TailwindCSS. The portfolio showcases projects, skills, and experience with smooth animations, responsive design, SEO optimization, and a clean, professional aesthetic.

**Live Site**: https://lxnid.github.io/me
**GitHub**: https://github.com/lxnid/me

## Tech Stack

### Core Technologies
- **Framework**: Next.js 15.3.4 (App Router, Static Export)
- **UI Library**: React 19.0.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages

### Animation & UX Libraries
- **Framer Motion** (v12.23.0): Primary animation library for React components
- **GSAP** (v3.13.0): Advanced animations and timeline sequences
- **@studio-freight/lenis** (v1.0.42): Smooth scrolling
- **split-type** (v0.3.4): Text animation utilities
- **react-intersection-observer** (v9.16.0): Scroll-triggered animations

### 3D Graphics
- **Three.js** (v0.177.0): 3D rendering
- **@react-three/fiber** (v9.1.2): React renderer for Three.js
- **@react-three/drei** (v10.3.0): Helper components for React Three Fiber

### Icons
- **react-icons** (v5.5.0): Icon library (using react-icons/bs, react-icons/io5, react-icons/fa, etc.)

## Project Structure

```
/
├── app/                          # Next.js App Router directory
│   ├── components/               # Reusable React components
│   │   ├── AboutMe.tsx          # About section component
│   │   ├── AboutOverlay.tsx     # About overlay modal
│   │   ├── AnimatedText.tsx     # Text animation component
│   │   ├── ArchiveItem.tsx      # Archive portfolio item
│   │   ├── Button.tsx           # Reusable button with hover effects
│   │   ├── ErrorBoundary.tsx    # Error boundary for graceful error handling
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Header.tsx           # Hero header component
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── ProjectItem.tsx      # Individual project card
│   │   ├── ProjectPage.tsx      # Detailed project page component
│   │   ├── Projects.tsx         # Projects gallery
│   │   ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│   │   └── StructuredData.tsx   # SEO structured data (JSON-LD schema)
│   ├── data/                     # Data models and content
│   │   ├── projects.ts          # Project data with TypeScript interfaces
│   │   └── ArchiveData.ts       # Archive portfolio versions data
│   ├── utils/                    # Utility functions
│   │   └── slugify.ts           # URL slug generation
│   ├── work/                     # Work/Projects section
│   │   ├── page.tsx             # Projects gallery page
│   │   └── [slug]/              # Dynamic project detail pages
│   │       └── page.tsx         # Individual project page
│   ├── archive/                  # Portfolio archive section
│   │   └── page.tsx             # Archive page
│   ├── globals.css              # Global styles and custom fonts
│   ├── layout.tsx               # Root layout with Navbar, Footer, SmoothScroll
│   ├── page.tsx                 # Home page
│   ├── error.tsx                # Error page component
│   └── global-error.tsx         # Global error handler
├── public/                       # Static assets
│   ├── fonts/                   # Custom fonts (PP Neuemontreal)
│   ├── heroBackground/          # Hero section backgrounds
│   ├── video/                   # Video assets
│   └── workImages/              # Project images by project
│       ├── melodine/            # Melodine project images
│       ├── portfolio_24/        # 2024 Portfolio images
│       ├── portfolio_current/   # Current portfolio images
│       ├── todo/                # Todo app images
│       └── weather/             # Weather app images
├── .github/workflows/           # CI/CD workflows
│   └── nextjs.yml              # GitHub Pages deployment
├── eslint.config.mjs           # ESLint configuration (flat config)
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── PROJECT_UPDATES.md          # Changelog and project updates
└── CLAUDE.md                   # AI assistant guide (this file)
```

## Key File Purposes

### Configuration Files

- **next.config.ts**: Configures Next.js for static export (`output: 'export'`), disables image optimization for GitHub Pages (`unoptimized: true`), sets React strict mode, includes remote image patterns for external assets
- **tailwind.config.js**: Configures Tailwind to scan `app/**/*.{tsx,ts,jsx,js}`, `pages/`, and `components/` directories, extends theme with custom font family "PP Neuemontreal"
- **tsconfig.json**: TypeScript config with path alias `@/*` pointing to root, ES2017 target, strict mode enabled, includes Next.js plugin
- **eslint.config.mjs**: ESLint flat config extending Next.js core web vitals and TypeScript presets
- **postcss.config.mjs**: PostCSS configuration for Tailwind CSS processing

### Core App Files

- **app/layout.tsx**: Root layout wrapping all pages with:
  - Dark theme (`bg-[#000000]` background, `text-[#dddddd]` text)
  - Comprehensive SEO metadata (OpenGraph, Twitter cards, structured data)
  - Font preloading for performance optimization
  - Global components: Navbar, SmoothScroll wrapper, Footer
  - StructuredData component for JSON-LD schema
  - ErrorBoundary wrapper for error handling

- **app/page.tsx**: Home page with three main sections:
  1. Hero section with Header component
  2. Projects section (shows 2 projects via `<Projects count={2} />`)
  3. About section with AboutMe component

- **app/globals.css**: Global styles including:
  - Custom font-face declarations for PP Neuemontreal (weights: 400, 500, 700)
  - Base styles for html/body
  - Canvas element styling for Three.js
  - Accessibility: `prefers-reduced-motion` media query support

- **app/error.tsx** & **app/global-error.tsx**: Error handling pages for graceful error recovery

### Data Files

- **app/data/projects.ts**: Defines `Project` and `ProjectSection` interfaces and exports `projects` array
  - Each project includes: id, galleryImage, title, headline, image, secondaryImage?, tertiaryImage?, link, githubUrl?, description, technologies, date, role, sections?
  - **5 active projects**: Portfolio 2024, Todo App, Weather App, Current Portfolio, Melodine
  - Supports single or multiple paragraphs in sections' content
  - Optional list items in sections
  - Dynamic sections for case study format (Challenge, Development, Reflection, etc.)

- **app/data/ArchiveData.ts**: Archive of previous portfolio versions for the archive page

- **app/utils/slugify.ts**: Converts project titles to URL-friendly slugs (lowercase, replace spaces with dashes, remove special characters)

### Component Patterns

- **Button.tsx**: Link component with:
  - Hover effects using Tailwind group utilities
  - Icon transitions (BsArrowRightCircleFill ↔ BsArrowRightCircle)
  - Props: `href`, `label`

- **ProjectPage.tsx**: Detailed project page with:
  - Hero image section with gradient overlay
  - Overview with headline, description, technologies (with tech-specific icons)
  - Dynamic sections from projects.ts (Challenge, Development, Reflection, etc.)
  - Framer Motion animations (fadeInUp, fadeInLeft, staggerContainer)
  - Secondary/tertiary images if available
  - GitHub and live site links with hover effects
  - "More projects" section showing other projects

- **StructuredData.tsx**: SEO component that injects JSON-LD structured data:
  - Person schema (name, job title, skills, social profiles)
  - WebSite schema
  - ProfilePage schema with creation/modification dates

- **ErrorBoundary.tsx**: React class component for error handling:
  - Catches JavaScript errors in component tree
  - Displays fallback UI with refresh option
  - Logs errors to console (can integrate with error reporting services)

- **SmoothScroll.tsx**: Client component wrapping Lenis smooth scroll library

- **Navbar.tsx**: Navigation component with links to Work and Archive pages

- **Footer.tsx**: Site footer with social links and copyright

## Code Conventions

### Component Structure
1. **"use client" directive** at top for client components using hooks/animations
2. **Imports**: External libraries → Internal components → Types → Icons
3. **TypeScript interfaces** for props defined inline or imported from data files
4. **Functional components** with arrow function syntax (except ErrorBoundary which is a class component)
5. **Early returns** for error/loading states (e.g., 404 in ProjectPage)

### Styling Conventions
- **Tailwind CSS** for all styling (no CSS modules or styled-components)
- **Color palette**:
  - Background: `bg-[#000000]`, `bg-neutral-950`, `bg-neutral-900`
  - Text: `text-[#dddddd]`, `text-neutral-100/200/300/400`
  - Borders: `border-neutral-400/700`
  - Accent colors: Technology-specific (React blue, TypeScript blue, Next.js black, etc.)
- **Responsive design**: Mobile-first with `md:`, `lg:` breakpoints
- **Custom font**: "PP Neuemontreal" loaded via @font-face in globals.css (weights: 400, 500, 700)
- **Font preloading**: Critical fonts preloaded in layout.tsx head for performance
- **Accessibility**: Respects `prefers-reduced-motion` for users with motion sensitivity

### Animation Patterns

#### Framer Motion
- **Common variants**:
  ```typescript
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  ```

- **Usage pattern**:
  ```tsx
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
  ```

- **Viewport intersection**: `viewport={{ once: true, amount: 0.3 }}` ensures animations trigger once when 30% visible

#### Hover Effects
- Group-based transitions: `group` class on parent, `group-hover:` on children
- Common pattern: Opacity changes (`opacity-70 hover:opacity-100`)
- Icon transitions: Absolute positioning with opacity toggles

### TypeScript Patterns
- **Interfaces** for all component props and data structures
- **Optional properties** with `?` operator (e.g., `githubUrl?: string`, `sections?: ProjectSection[]`)
- **Array types** for multiple values (e.g., `technologies: string[]`)
- **Union types** for content (e.g., `content: string | string[]`)
- **Type imports**: `import type { ... }` for type-only imports

### SEO & Metadata Best Practices
- **Comprehensive metadata** in layout.tsx:
  - Title with template for nested pages
  - Description and keywords
  - OpenGraph tags for social sharing
  - Twitter card metadata
  - Canonical URLs
  - Robots directives
- **Structured data** using JSON-LD schema (Person, WebSite, ProfilePage)
- **Semantic HTML**: Use proper heading hierarchy, nav, main, section tags
- **Meta theme color**: Matches dark background (#000000)

## Development Workflow

### Scripts
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production (static export to /out)
npm run start    # Start production server (not used for static export)
npm run lint     # Run ESLint
```

### Development Process
1. **Local Development**: Run `npm run dev` and test at localhost:3000
2. **Build**: Run `npm run build` to generate static site in `/out` directory
3. **Commit**: Use descriptive commit messages following conventional commits
   - feat: New features
   - fix: Bug fixes
   - style: Styling changes
   - refactor: Code refactoring
   - docs: Documentation updates
4. **Push**: Push to appropriate branch (feature branches or main)
5. **Deploy**: GitHub Actions automatically deploys on push to `main` branch

### Git Workflow
- **Main branch**: `main` (auto-deploys to GitHub Pages)
- **Feature branches**: Named with prefix like `claude/` for Claude-assisted development
- **Commit messages**: Follow conventional commits pattern:
  - "feat(projects): add Melodine music streaming application to portfolio"
  - "fix: remove duplicate image and adjust project page layout"
  - "style(ProjectPage): add rounded corners to project cards"
  - "refactor: content"

### Deployment
- **Platform**: GitHub Pages
- **Workflow**: `.github/workflows/nextjs.yml`
- **Process**:
  1. Checkout code
  2. Setup Node.js 20
  3. Detect package manager (npm/yarn)
  4. Setup Pages with automatic basePath injection
  5. Restore Next.js cache for faster builds
  6. Install dependencies (`npm ci`)
  7. Build Next.js site (`next build`)
  8. Upload artifact from `/out` directory
  9. Deploy to GitHub Pages
- **Base path**: Site deployed at `/me` path
- **Automatic optimization**: GitHub Actions automatically injects basePath and optimizes for static hosting

## AI Assistant Guidelines

### When Adding New Features
1. **Maintain consistency** with existing component patterns
2. **Use TypeScript** for all new files with proper interfaces
3. **Follow Tailwind** styling conventions (no inline styles or CSS modules)
4. **Add animations** using Framer Motion for consistency
5. **Test responsiveness** across mobile, tablet, desktop
6. **Update data files** (projects.ts) rather than hardcoding content
7. **Consider SEO** impact and update metadata if needed
8. **Wrap in ErrorBoundary** if creating new complex features

### When Modifying Components
1. **Preserve existing animations** and interaction patterns
2. **Maintain color scheme** (neutral grays, tech-specific accent colors)
3. **Keep accessibility** in mind (aria-labels, semantic HTML, keyboard navigation)
4. **Avoid breaking changes** to component props/interfaces
5. **Test hover states** and transitions
6. **Respect prefers-reduced-motion** for accessibility

### When Working with Projects Data
1. **Add new projects** to `app/data/projects.ts` following the `Project` interface
2. **Include all required fields**:
   - `id` (number, unique)
   - `galleryImage` (string, path to gallery thumbnail)
   - `title` (string)
   - `headline` (string, short description for project page)
   - `image` (string, main hero image)
   - `link` (string, live site URL)
   - `description` (string, detailed description)
   - `technologies` (string[], list of tech used)
   - `date` (string, year or date)
   - `role` (string, e.g., "Full-Stack Development")
3. **Optional fields**:
   - `secondaryImage`, `tertiaryImage` (additional screenshots)
   - `githubUrl` (link to GitHub repo)
   - `sections` (ProjectSection[], for case study format)
4. **Use sections array** for detailed project content:
   - Each section has: `title`, `content` (string or string[]), optional `list`
   - Common section titles: "Challenge", "Development", "Reflection", "Learning Objectives & Challenges", "Technical Implementation & Learning Process", "What I Built & Achieved", "Key Takeaways & Growth"
5. **Place images** in `public/workImages/{project-name}/` directory
6. **Image naming**: Use `-min.jpg` suffix for optimized images
7. **Generate slugs** automatically using `generateSlug()` utility from title

### Common Tasks

#### Adding a New Project
1. Add project data to `projects` array in `app/data/projects.ts`
2. Add project images to `public/workImages/{project-name}/`
3. Ensure images are optimized (use -min.jpg suffix pattern)
4. Include `sections` array for detailed case study content if desired
5. Test project page at `/work/{slug}` (e.g., `/work/portfolio-website-2024`)
6. Verify responsive design on mobile, tablet, desktop
7. Check that all links (GitHub, live site) work correctly

#### Updating Styling
1. Modify Tailwind classes directly in components
2. Add custom utilities to `tailwind.config.js` if needed
3. Global styles go in `app/globals.css` (fonts, base styles, animations only)
4. Maintain dark theme color consistency
5. Test hover and focus states

#### Adding New Pages
1. Create page in `app/{route}/page.tsx`
2. Export default component
3. Add navigation link to Navbar.tsx if needed
4. Ensure layout.tsx wraps the page correctly
5. Add appropriate metadata using Next.js metadata API
6. Consider adding to sitemap if implementing one

#### Enhancing SEO
1. Update metadata in `app/layout.tsx` or individual page metadata
2. Modify `StructuredData.tsx` to add/update JSON-LD schemas
3. Ensure semantic HTML with proper heading hierarchy
4. Add alt text to all images
5. Use descriptive link text (avoid "click here")
6. Test with Google's Rich Results Test

### Performance Considerations
- **Images**: Use Next.js `<Image>` component with `unoptimized` prop for GitHub Pages
- **Font optimization**: Fonts preloaded in layout.tsx with `font-display: swap`
- **Lazy loading**: Dynamic imports for heavy components (Three.js, animation libraries)
- **Animations**: Use `will-change` CSS property sparingly
- **Build size**: Monitor bundle size with `npm run build`
- **Smooth scrolling**: Lenis library optimized for performance
- **Code splitting**: Next.js automatically code-splits by route

### Testing Checklist
- [ ] Component renders correctly
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px+)
- [ ] Animations trigger appropriately
- [ ] Hover states work as expected
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] Lint passes (`npm run lint`)
- [ ] Accessibility: keyboard navigation, screen readers, focus states
- [ ] Dark mode colors consistent
- [ ] SEO metadata present and accurate
- [ ] Error boundaries catch errors gracefully
- [ ] Smooth scrolling works correctly
- [ ] All links functional (internal and external)

## Important Notes

### Static Export Limitations
- No server-side rendering at runtime (build-time only)
- No API routes (all data must be in static files)
- No `next/image` optimization (must use `unoptimized: true`)
- All routes must be static (no dynamic data fetching at runtime)
- No incremental static regeneration (ISR)

### GitHub Pages Specifics
- Site deployed at `https://lxnid.github.io/me`
- Base path is `/me`, automatically handled by GitHub Actions
- All links should use relative paths when possible
- Font paths use `/fonts/` (resolved to `/me/fonts/` in production)
- Image paths use relative paths like `workImages/...`

### Asset Management
- **Fonts**: Custom font "PP Neuemontreal" in `/public/fonts/`
  - ppneuemontreal-book.otf (weight 400)
  - ppneuemontreal-medium.otf (weight 500)
  - ppneuemontreal-bold.otf (weight 700)
- **Images**: Organized by project in `/public/workImages/`
  - Each project has its own subdirectory
  - Use `-min.jpg` suffix for optimized images
- **Videos**: Video assets in `/public/video/`
- **Hero backgrounds**: Background images in `/public/heroBackground/`

### Error Handling
- **ErrorBoundary**: Wraps main content in layout.tsx
- **Error pages**: Dedicated error.tsx and global-error.tsx
- **Graceful degradation**: Fallback UI when errors occur
- **Console logging**: Errors logged for development debugging
- **Production consideration**: Can integrate with error reporting services (Sentry, LogRocket)

## Current Projects

The portfolio currently features 5 projects in `app/data/projects.ts`:

1. **Portfolio Website 2024** (ID: 1)
   - Technologies: ReactJS, NextJS, Tailwind CSS, Framer Motion, TypeScript
   - Comprehensive case study with sections on Challenge, Solution Architecture, and Reflection

2. **To-Do Web App** (ID: 2)
   - Technologies: React.js, Firebase Authentication, Firestore Database, React Hooks, Tailwind CSS
   - Focus on Firebase integration and full-stack development

3. **Weather App** (ID: 3)
   - Technologies: React, TypeScript, Python, FastAPI, OpenWeatherMap API, Tailwind CSS
   - Full-stack application with Python backend

4. **Current Portfolio** (ID: 4)
   - Technologies: Next.js, TypeScript, Framer Motion, Tailwind CSS
   - Ongoing project (this portfolio itself)

5. **Melodine: A Music Streaming Application** (ID: 5)
   - Technologies: Next.js 15, React 19, TypeScript, NextAuth.js, Spotify Web API, Tailwind CSS 4, Zustand, TanStack Query, Framer Motion, Docker
   - Advanced project demonstrating OAuth authentication, state management, API integration, and DevOps

All projects include detailed sections providing comprehensive case studies of the development process, challenges, solutions, and learnings.

## Recent Updates

Based on PROJECT_UPDATES.md and current codebase state:

1. **Enhanced Project Pages**: All projects now use comprehensive case study format with:
   - Project Overview sections with headline and detailed description
   - Problem Analysis & Solution sections explaining challenges
   - Technical Implementation details with architecture and key features
   - Development Process documentation showing iterative approach
   - Results & Insights demonstrating outcomes and learnings

2. **Dynamic Sections in projects.ts**: Projects support flexible content via `sections?: ProjectSection[]`
   - Each section has: title, content (string | string[]), optional list
   - Supports single or multiple paragraphs for rich storytelling
   - Professional layout with responsive grid system
   - Alternating backgrounds for visual hierarchy

3. **SEO & Performance Enhancements**:
   - Comprehensive metadata in layout.tsx (OpenGraph, Twitter cards)
   - JSON-LD structured data via StructuredData component
   - Font preloading for better performance
   - Accessibility improvements (prefers-reduced-motion support)

4. **Error Handling**:
   - ErrorBoundary component for graceful error recovery
   - Dedicated error.tsx and global-error.tsx pages
   - User-friendly error messages with refresh option

5. **Visual & UX Improvements**:
   - Rounded corners on project cards
   - Improved typography hierarchy
   - Enhanced spacing and alignment
   - Color-coded technology icons
   - Smooth animations with Framer Motion
   - Lenis smooth scrolling

## Support & Resources

- **Next.js 15 Docs**: https://nextjs.org/docs
- **Tailwind CSS 4 Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/
- **GSAP Docs**: https://gsap.com/docs/
- **Lenis Smooth Scroll**: https://lenis.studiofreight.com/
- **Three.js Docs**: https://threejs.org/docs/

## Contact

For questions about this codebase:
- **Author**: Hirusha Dinil
- **GitHub**: https://github.com/lxnid
- **LinkedIn**: https://linkedin.com/in/lxnid
- **Portfolio**: https://lxnid.github.io/me

---

**Last Updated**: 2025-11-18
**Version**: Current (Ongoing Development)
