/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com', // Replace with your actual image host
      },
    ],
  },
  logging: {
    level: 'error',
    fullUrl: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
