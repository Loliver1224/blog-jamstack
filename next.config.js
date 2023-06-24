/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.microcms-assets.io'
      }
    ]
  }
}

module.exports = nextConfig
