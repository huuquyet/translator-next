const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // (Optional) Export as a static site
  // See https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.

  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [],
  experimental: {
    // optimizeCss: true,
    scrollRestoration: true,
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  // Override the default webpack configuration
  webpack: (config) => {
    // See https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      'onnxruntime-node$': false,
    }
    return config
  },
}

module.exports = withPWA(nextConfig)