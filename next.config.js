const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  env: {
    VITE_REACT_APP: process.env.VITE_REACT_APP,
  },
};

module.exports = nextConfig;
