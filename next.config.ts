import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'local',
       
        pathname: '/public/assets/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
