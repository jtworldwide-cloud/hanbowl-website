/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — host on Vercel / Netlify / GitHub Pages / S3
  output: 'export',
  images: {
    unoptimized: true, // static export ต้องใช้ unoptimized
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
