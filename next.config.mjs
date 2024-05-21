/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-northeast-1.graphassets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
