/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '/img/**',
        },
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.fakestoreapi.com',
          pathname: '/**',
        }
      ],
    },
  };
  
  module.exports = nextConfig; 