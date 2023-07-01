/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    CALENDAR_LINK: process.env.CALENDAR_LINK,
  }
}

module.exports = nextConfig
