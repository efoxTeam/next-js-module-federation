module.exports = {
  webpack: (config, options) => {
    const {webpack} = options
    config.output.publicPath = 'auto'
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: 'nextHost',
        library: {type: config.output.libraryTarget, name: 'nextHost'},
        filename: 'static/runtime/emp.js',
        remotes: {},
        exposes: {
          './home': './components/home',
        },
      }),
    )
    console.log(config)
    return config
  },
}
