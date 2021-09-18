const package = require('./package.json')
module.exports = {
  /* future: {
    webpack5: true,
  }, */
  /* webpack5: {
    experiments: {
      topLevelAwait: true,
    },
  }, */
  webpack: (config, {webpack}) => {
    // if (options.isServer) return config
    // const {webpack} = options
    const name = 'app1'
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name,
        library: {type: config.output.libraryTarget, name},
        remotes: {},
        /* shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        }, */
      }),
    )
    // console.log(config.output.libraryTarget)
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  },
}
