module.exports = {
  webpack: (config, options) => {
    const {webpack} = options
    const projectName = 'demo1'
    // config.experiments.set('topLevelAwait', true)
    config.experiments = {...config.experiments, ...{topLevelAwait: true}}
    // console.log(config)
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'static/runtime/emp.js',
        remotes: {
          // '@d2': 'demo2@http://localhost:8000/emp.js',
          '@d2': 'demo2',
        },
        exposes: {
          home: './components/home',
        },
      }),
    )
    return config
  },
}
