/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    GITHUB_URL: process.env.GITHUB_URL,
  }
}

module.exports = nextConfig
