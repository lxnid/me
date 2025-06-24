import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform (if you were using styled-components)
    // styledComponents: true,
  },
  images: {
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
