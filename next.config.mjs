/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "assets.coingecko.com",
      "www.coingecko.com",
    ],
  },
};

export default nextConfig;
