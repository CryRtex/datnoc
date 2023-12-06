/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// Path: next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          
        },
      ],
    },
  }
