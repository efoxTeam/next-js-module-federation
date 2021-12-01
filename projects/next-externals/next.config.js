// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config, {isServer, webpack}) {
    if (!isServer) {
      config.externals = {
        next: 'next',
        react: 'React',
        'react-dom': 'ReactDOM',
      }
      config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
          name: 'nextExternals',
          remotes: {},
        }),
      )
    }
    //
    return config
  },
}
