module.exports = {
  webpack: (config, options) => {
    if (options.isServer) return config
    const {webpack} = options
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        remotes: {
          '@sh': 'staticHost@http://localhost:3003/emp.js',
        },
      }),
    )
    return config
  },
}
