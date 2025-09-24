import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Kalau ada error ESLint (unused import, unescaped entities, dll),
    // build di Vercel tetap lanjut jalan
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
