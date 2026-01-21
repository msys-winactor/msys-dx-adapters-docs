import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/msys-dx-adapters-docs',
  images: {
    unoptimized: true // 必須
  }
}

const withNextra = nextra({
  // ... Add Nextra-specific options here
})

export default withNextra(nextConfig)
