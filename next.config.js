const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { appDir: true },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giphy.com",
      },
      {
        protocol: "https",
        hostname: "api.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media0.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media1.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media2.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media3.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media4.giphy.com",
      },
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
      },
      {
        protocol: "https",
        hostname: "media.tenor.co",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pokeapi.co",
      },
      {
        protocol: "https",
        hostname: "i.gifer.com",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
    ],
  },
};

module.exports = nextConfig;
