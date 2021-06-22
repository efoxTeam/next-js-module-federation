const reunited = require('./reunited')
const path = require('path')
module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    // if (options.isServer) return config
    // config.output.publicPath = 'auto'
    const {webpack} = options
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: 'nextHost',
        library: {type: config.output.libraryTarget, name: 'nextHost'},
        filename: 'static/runtime/emp.js',
        remotes: {
          // staticHost: 'staticHost@http://localhost:3003/emp.js'
          staticHost: reunited(path.join(__dirname, './helper/statichost.js'), 'staticHost'),
        },
        exposes: {
          './home': './components/home',
        },
      }),
    )
    // console.log(JSON.stringify(config, null, 2))
    return config
  },
}
