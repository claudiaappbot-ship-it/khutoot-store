/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    output: 'standalone',
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'khutoot.store', 'www.khutoot.store'],
  },
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/shop-all',
        destination: '/shop',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
