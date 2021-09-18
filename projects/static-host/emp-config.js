/**
 * @type {import('@efox/emp-cli').EMPConfig}
 */
module.exports = {
  webpackChain(config) {
    config.devServer.port(3003)
    // config.target('node')
    // config.output.publicPath('http://localhost:3003/')
  },
  moduleFederation: {
    name: 'staticHost',
    filename: 'emp.js',
    // library: {type: 'commonjs-module', name: 'staticHost'},
    exposes: {
      './home': 'src/components/App',
    },
    /* shared: {
      react: {
        eager: true,
        singleton: true,
      },
      'react-dom': {
        eager: true,
        singleton: true,
      },
    }, */
  },
}
