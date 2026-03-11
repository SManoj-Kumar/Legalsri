/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from external domains (for placeholder profile pics etc.)
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
    unoptimized: true,
  },
};

export default nextConfig;
