import {EMPConfig} from '@efox/emp-cli/types/emp-config'

const config: EMPConfig = {
  webpackChain(config) {
    config.devServer.port(3003)
    // config.target('node')
    config.output.publicPath('http://localhost:3003/')
  },
  moduleFederation: {
    name: 'staticHost',
    filename: 'emp.js',
    // library: {type: 'commonjs-module'},
    exposes: {
      './home': 'src/components/App',
    },
  },
}
export default config
