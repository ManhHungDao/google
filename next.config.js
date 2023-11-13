/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["cdn.shopify.com", "static1.squarespace.com"],
  },
};

module.exports = nextConfig;
