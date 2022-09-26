/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: 'https://picsum.photos/seed/picsum/200/300',
  },
}

module.exports = nextConfig
