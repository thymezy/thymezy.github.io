/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/thymezy.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/thymezy.github.io' : '',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // distDir: 'docs',
};

module.exports = nextConfig;
