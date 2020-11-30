const path = require('path')
const packagePath = path.join(path.resolve('./'), 'package.json')
const {dependencies} = require(packagePath)
console.log(packagePath)

module.exports = ({config, env}) => {
  const projectName = 'demo2'
  const port = 8000
  const publicPath = `http://localhost:${port}/`
  config.output.publicPath(publicPath)
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'emp.js',
        remotes: {
          // demo2: 'demo2',
        },
        exposes: {
          './home': 'src/components/App',
        },
        shared: {...dependencies},
      },
    }
    return args
  })
}
