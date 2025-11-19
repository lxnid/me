import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  devIndicators: false,
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform (if you were using styled-components)
    // styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v7.usestate.org',
        port: '',
        pathname: '/images/home/**',
      },
    ],
  },
  // Note: Security headers below don't apply to static export (GitHub Pages)
  // These headers should be configured at the CDN/reverse proxy level
  // See SECURITY.md for recommended headers configuration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';"
          }
        ],
      },
    ];
  },
};

export default nextConfig;
