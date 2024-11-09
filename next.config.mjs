/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'images.unsplash.com',
          },
          {
            hostname: 'unsplash.com',
          },
          {
            hostname: 'github.com',
          },
        ],
    },
};

export default nextConfig;
