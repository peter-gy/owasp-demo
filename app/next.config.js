/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Needed for Docker build */
  experimental: {
    outputStandalone: true
  }
};

module.exports = nextConfig;
