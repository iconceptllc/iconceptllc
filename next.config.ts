import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dvrw9jbbu/**",
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
