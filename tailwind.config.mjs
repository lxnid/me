import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        neuemontreal: ['PP Neuemontreal', 'sans-serif'],
      },
      colors: {
        theme: {
          bg: {
            primary: 'var(--color-bg-primary)',
            secondary: 'var(--color-bg-secondary)',
            tertiary: 'var(--color-bg-tertiary)',
          },
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            muted: 'var(--color-text-muted)',
          },
          border: {
            DEFAULT: 'var(--color-border)',
            muted: 'var(--color-border-muted)',
          },
          surface: {
            DEFAULT: 'var(--color-surface)',
            hover: 'var(--color-surface-hover)',
          },
          accent: {
            DEFAULT: 'var(--color-accent)',
            hover: 'var(--color-accent-hover)',
          },
        },
      },
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'theme-glow': 'var(--shadow-glow)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: 'PP Neuemontreal, sans-serif',
            maxWidth: 'none',
            // Default styling (can be overridden by prose-invert)
            color: theme('colors.neutral.300'),
            '[class~="lead"]': { color: theme('colors.neutral.400') },
            a: { color: theme('colors.blue.400'), textDecoration: 'none' },
            strong: { color: theme('colors.white'), fontWeight: '600' },
            'ol > li::marker': { color: theme('colors.neutral.500') },
            'ul > li::marker': { color: theme('colors.neutral.500') },
            hr: { borderColor: theme('colors.neutral.800') },
            blockquote: {
              color: theme('colors.neutral.300'),
              borderLeftColor: theme('colors.blue.500'),
              backgroundColor: theme('colors.neutral.900'),
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            h1: { color: theme('colors.neutral.100'), fontWeight: '500' },
            h2: {
              color: theme('colors.neutral.100'),
              fontWeight: '500',
              borderBottom: `1px solid ${theme('colors.neutral.800')}`,
              paddingBottom: '0.5rem',
              marginTop: '2em',
            },
            h3: { color: theme('colors.neutral.100'), fontWeight: '500' },
            h4: { color: theme('colors.neutral.100'), fontWeight: '500' },
            code: {
              color: theme('colors.neutral.200'),
              backgroundColor: theme('colors.neutral.800'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: theme('colors.neutral.900'),
              border: `1px solid ${theme('colors.neutral.800')}`,
            },
            'pre code': {
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0',
            },
            // Table styles
            table: {
              width: '100%',
              marginTop: '2em',
              marginBottom: '2em',
              borderCollapse: 'collapse',
            },
            'thead th': {
              color: theme('colors.neutral.100'),
              textAlign: 'left',
              borderBottom: `1px solid ${theme('colors.neutral.700')}`,
              padding: '0.5rem',
            },
            'tbody td': {
              borderBottom: `1px solid ${theme('colors.neutral.800')}`,
              padding: '0.5rem',
              verticalAlign: 'top',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
