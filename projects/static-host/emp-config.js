/* const path = require('path')
const packagePath = path.join(path.resolve('./'), 'package.json')
const {dependencies} = require(packagePath)
console.log(packagePath) */

module.exports = ({config, env}) => {
  config.devServer.port(3003)
  config.devtool = 'eval-source-map'
  config.output.publicPath('http://localhost:3003/')
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: 'staticHost',
        // library: {type: 'commonjs-module'},
        // library: {type: 'module'},
        // remoteType: 'promise',
        // library: {type: 'commonjs2'},
        // library: {type: 'global'},
        filename: 'emp.js',
        exposes: {
          './home': 'src/components/App',
        },
        // shared: {...dependencies},
      },
    }
    return args
  })
}
