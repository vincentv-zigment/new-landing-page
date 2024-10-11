/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['cdn.zigment.ai'], // Allow images from all sources
  },
};

export default nextConfig;
