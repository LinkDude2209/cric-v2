import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "randomuser.me"], // Add all required hostnames here
  },
  // Add other config options if needed
};

export default nextConfig;
