/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from external domains (for placeholder profile pics etc.)
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
};

export default nextConfig;
