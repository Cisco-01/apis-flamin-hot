/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      //GIPHY
      'giphy.com',
      'api.giphy.com',
      'media.giphy.com',
      'media0.giphy.com',
      'media1.giphy.com',
      'media2.giphy.com',
      'media3.giphy.com',
      'media4.giphy.com',
      'mir-s3-cdn-cf.behance.net',
      'i.imgur.com',

      //RICK & MORTY
      'rickandmortyapi.com',

      //POKÉMON
      'media.tenor.co',
      'raw.githubusercontent.com',
      'pokeapi.co',

      //Astronomy Picture of the Day
      'i.gifer.com',
      'https://apod.nasa.gov',
    ],
  },
};

module.exports = nextConfig;
