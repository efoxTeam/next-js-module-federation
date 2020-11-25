module.exports = {
  webpack: (config, options) => {
    const {webpack} = options
    const projectName = 'demo1'
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'static/runtime/emp.js',
        remotes: {
          demo2: 'demo2',
        },
        exposes: {
          home: './components/home',
        },
      }),
    )
    return config
  },
}
