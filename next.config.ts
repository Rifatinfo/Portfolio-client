import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/assets/**',

      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // allow any path under i.ibb.co
      },
    ],
  },
   experimental: {
    serverActions: {
      bodySizeLimit: '100mb', // 👈 increase limit
    },
  },
};

export default nextConfig;
