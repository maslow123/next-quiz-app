/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: 'https://picsum.photos/seed/picsum/200/300',
  },
}

module.exports = nextConfig
