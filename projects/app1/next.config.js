module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, {webpack}) => {
    // if (options.isServer) return config
    // const {webpack} = options
    // config.plugins.push(
    //   new webpack.container.ModuleFederationPlugin({
    //     remotes: {
    //       '@sh': 'staticHost@http://localhost:3003/emp.js',
    //     },
    //   }),
    // )
    // console.log(webpack)
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  },
}
