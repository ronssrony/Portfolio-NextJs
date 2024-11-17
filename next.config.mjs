/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3100',
        pathname: '/images/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash image host
        pathname: '/**', // Allow all paths on Unsplash
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // Unsplash image host
        pathname: '/**', // Allow all paths on Unsplash
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com', // Unsplash image host
        pathname: '/**', // Allow all paths on Unsplash
      }
    ],
  },
};

export default nextConfig;
