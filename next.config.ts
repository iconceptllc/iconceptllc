import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dxtzc8b5m/**",
      },
      {
        protocol: "https",
        hostname: "www.iconceptme.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "iconceptme.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
