/* const path = require('path')
const packagePath = path.join(path.resolve('./'), 'package.json')
const {dependencies} = require(packagePath)
console.log(packagePath) */

module.exports = ({config, env}) => {
  config.devServer.port(3003)
  config.devtool = 'eval-source-map'
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: 'staticHost',
        library: {type: 'var', name: 'staticHost'},
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
