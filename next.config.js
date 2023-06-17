/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = nextConfig
