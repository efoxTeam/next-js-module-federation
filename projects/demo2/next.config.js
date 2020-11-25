module.exports = {
  webpack: (config, options) => {
    const {webpack} = options
    const projectName = 'demo2'
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'static/runtime/emp.js',
        remotes: {
          demo1: 'demo1',
        },
        exposes: {
          home: './components/home',
        },
      }),
    )
    return config
  },
}
