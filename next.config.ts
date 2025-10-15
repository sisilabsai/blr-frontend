import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en', 'fr', 'pt', 'zh', 'de'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
