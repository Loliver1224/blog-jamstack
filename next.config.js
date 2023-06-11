/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.microcms-assets.io'
      }
    ]
  }
}

module.exports = nextConfig
