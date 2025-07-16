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
};

export default nextConfig;
