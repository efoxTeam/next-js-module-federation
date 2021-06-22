module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: 'var',
        remotes: {
          nextHost: 'nextHost',
        },
        shared: {
          react: {
            // Notice shared ARE eager here.
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          'next/dynamic': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          'next/link': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      }),
    )

    return config
  },
}
