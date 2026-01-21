import nextra from 'nextra'

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/msys-dx-adapters-docs' : '',
  basePath: isProd ? '/msys-dx-adapters-docs' : '',
  images: {
    unoptimized: true // 必須
  },
  experimental: {
    optimizePackageImports: ['nextra-theme-docs']
  }
}

const withNextra = nextra({})

export default withNextra(nextConfig)
