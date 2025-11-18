# CLAUDE.md - AI Assistant Guide for Portfolio Project

## Project Overview

This is a modern, interactive developer portfolio website for **Hirusha Dinil**, built with Next.js 15, React 19, and TailwindCSS. The portfolio showcases projects, skills, and experience with smooth animations, responsive design, and a clean, professional aesthetic.

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
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Header.tsx           # Hero header component
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── ProjectItem.tsx      # Individual project card
│   │   ├── ProjectPage.tsx      # Detailed project page component
│   │   ├── Projects.tsx         # Projects gallery
│   │   └── SmoothScroll.tsx     # Lenis smooth scroll wrapper
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
│   └── page.tsx                 # Home page
├── public/                       # Static assets
│   ├── fonts/                   # Custom fonts (PP Neuemontreal)
│   ├── heroBackground/          # Hero section backgrounds
│   ├── video/                   # Video assets
│   └── workImages/              # Project images by project
├── .github/workflows/           # CI/CD workflows
│   └── nextjs.yml              # GitHub Pages deployment
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Key File Purposes

### Configuration Files

- **next.config.ts**: Configures Next.js for static export (`output: 'export'`), disables image optimization for GitHub Pages (`unoptimized: true`), sets React strict mode
- **tailwind.config.js**: Configures Tailwind to scan `app/**/*.{tsx,ts,jsx,js}`, extends theme with custom font family
- **tsconfig.json**: TypeScript config with path alias `@/*` pointing to root, ES2017 target, strict mode enabled

### Core App Files

- **app/layout.tsx**: Root layout wrapping all pages with:
  - Dark theme (`bg-[#000000]` background, `text-[#dddddd]` text)
  - Global Navbar, SmoothScroll wrapper, and Footer
  - Metadata (title, description)

- **app/page.tsx**: Home page with three main sections:
  1. Hero section with Header component
  2. Projects section (shows 2 projects via `<Projects count={2} />`)
  3. About section with AboutMe component

### Data Files

- **app/data/projects.ts**: Defines `Project` and `ProjectSection` interfaces and exports `projects` array
  - Each project includes: id, title, images, description, technologies, date, role, optional dynamic sections
  - Supports single or multiple paragraphs in content, optional list items
  - Some projects may be commented out (e.g., Melodine project)

- **app/utils/slugify.ts**: Converts project titles to URL-friendly slugs (lowercase, replace spaces with dashes, remove special characters)

### Component Patterns

- **Button.tsx**: Link component with:
  - Hover effects using Tailwind group utilities
  - Icon transitions (BsArrowRightCircleFill ↔ BsArrowRightCircle)
  - Props: `href`, `label`

- **ProjectPage.tsx**: Detailed project page with:
  - Hero image section with gradient overlay
  - Overview with headline, description, technologies (with tech-specific icons)
  - Dynamic sections (Challenge, Development, Reflection, etc.)
  - Framer Motion animations (fadeInUp, fadeInLeft, staggerContainer)
  - Secondary/tertiary images if available
  - GitHub and live site links
  - "More projects" section

## Code Conventions

### Component Structure
1. **"use client" directive** at top for client components using hooks/animations
2. **Imports**: External libraries → Internal components → Types → Icons
3. **TypeScript interfaces** for props defined inline or imported from data files
4. **Functional components** with arrow function syntax
5. **Early returns** for error/loading states (e.g., 404 in ProjectPage)

### Styling Conventions
- **Tailwind CSS** for all styling (no CSS modules or styled-components)
- **Color palette**:
  - Background: `bg-[#000000]`, `bg-neutral-950`, `bg-neutral-900`
  - Text: `text-[#dddddd]`, `text-neutral-100/200/300/400`
  - Borders: `border-neutral-400/700`
  - Accent colors: Technology-specific (React blue, TypeScript blue, etc.)
- **Responsive design**: Mobile-first with `md:`, `lg:` breakpoints
- **Custom font**: "PP Neuemontreal" loaded via @font-face in globals.css (weights: 400, 500, 700)

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
- **Optional properties** with `?` operator (e.g., `githubUrl?: string`)
- **Array types** for multiple values (e.g., `technologies: string[]`)
- **Union types** for content (e.g., `content: string | string[]`)

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
4. **Push**: Push to appropriate branch (feature branches or main)
5. **Deploy**: GitHub Actions automatically deploys on push to `main` branch

### Git Workflow
- **Main branch**: `main` (auto-deploys to GitHub Pages)
- **Feature branches**: Named with prefix like `claude/` for Claude-assisted development
- **Commit messages**: Recent commits show pattern like:
  - "feat(ProjectPage): improve typography and enhance project details"
  - "fix: remove duplicate image and adjust project page layout"
  - "style(ProjectPage): add rounded corners to project cards"

### Deployment
- **Platform**: GitHub Pages
- **Workflow**: `.github/workflows/nextjs.yml`
- **Process**:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies (`npm ci`)
  4. Build Next.js site (`next build`)
  5. Upload artifact from `/out` directory
  6. Deploy to GitHub Pages
- **Base path**: Site deployed at `/me` path (hence `basePath` logic in components)

## AI Assistant Guidelines

### When Adding New Features
1. **Maintain consistency** with existing component patterns
2. **Use TypeScript** for all new files with proper interfaces
3. **Follow Tailwind** styling conventions (no inline styles or CSS modules)
4. **Add animations** using Framer Motion for consistency
5. **Test responsiveness** across mobile, tablet, desktop
6. **Update data files** (projects.ts) rather than hardcoding content

### When Modifying Components
1. **Preserve existing animations** and interaction patterns
2. **Maintain color scheme** (neutral grays, tech-specific accent colors)
3. **Keep accessibility** in mind (aria-labels, semantic HTML)
4. **Avoid breaking changes** to component props/interfaces
5. **Test hover states** and transitions

### When Working with Projects Data
1. **Add new projects** to `app/data/projects.ts` following the `Project` interface
2. **Include all required fields**: id, title, images, description, technologies, date, role
3. **Use sections array** for detailed project content (Challenge, Development, Reflection)
4. **Place images** in `public/workImages/{project-name}/` directory
5. **Generate slugs** automatically using `generateSlug()` utility

### Common Tasks

#### Adding a New Project
1. Add project data to `projects` array in `app/data/projects.ts`
2. Add project images to `public/workImages/{project-name}/`
3. Ensure images are optimized (use -min.jpg suffix pattern)
4. Include `sections` array for detailed content if desired
5. Test project page at `/work/{slug}`

#### Updating Styling
1. Modify Tailwind classes directly in components
2. Add custom utilities to `tailwind.config.js` if needed
3. Global styles go in `app/globals.css` (fonts, base styles only)
4. Maintain dark theme color consistency

#### Adding New Pages
1. Create page in `app/{route}/page.tsx`
2. Export default component
3. Add navigation link to Navbar.tsx if needed
4. Ensure layout.tsx wraps the page correctly

### Performance Considerations
- **Images**: Use Next.js `<Image>` component with `unoptimized` prop for GitHub Pages
- **Lazy loading**: Dynamic imports already used for heavy components
- **Animations**: Use `will-change` CSS property sparingly
- **Build size**: Monitor bundle size with `npm run build`

### Testing Checklist
- [ ] Component renders correctly
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px+)
- [ ] Animations trigger appropriately
- [ ] Hover states work as expected
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] Lint passes (`npm run lint`)
- [ ] Accessibility: keyboard navigation, screen readers
- [ ] Dark mode colors consistent

## Important Notes

### Static Export Limitations
- No server-side rendering at runtime
- No API routes
- No `next/image` optimization (must use `unoptimized: true`)
- All routes must be static (no dynamic data fetching)

### GitHub Pages Specifics
- Site deployed at `https://lxnid.github.io/me`
- Base path is `/me`, handled via `NEXT_PUBLIC_BASE_PATH` env variable
- All links should use relative paths or handle base path

### Asset Management
- **Fonts**: Custom font "PP Neuemontreal" in `/public/fonts/`
- **Images**: Organized by project in `/public/workImages/`
- **Naming**: Use descriptive names with `-min.jpg` suffix for optimized images

## Recent Updates

Based on PROJECT_UPDATES.md, the portfolio recently underwent significant enhancements:

1. **Enhanced Project Pages**: Added comprehensive case study format with:
   - Project Overview sections
   - Problem Analysis & Solution sections
   - Technical Implementation details
   - Development Process documentation
   - Results & Insights

2. **Dynamic Sections**: Projects now support flexible content sections via `ProjectSection[]` interface
   - Supports single or multiple paragraphs
   - Optional list items
   - Professional layout with grid system

3. **Visual Improvements**:
   - Rounded corners on project cards
   - Improved typography hierarchy
   - Enhanced spacing and alignment
   - Color-coded technology icons

## Support & Resources

- **Next.js 15 Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

## Contact

For questions about this codebase:
- **Author**: Hirusha Dinil
- **GitHub**: https://github.com/lxnid
- **LinkedIn**: https://linkedin.com/in/lxnid

---

**Last Updated**: 2025-01-18
**Version**: Current (Ongoing Development)
