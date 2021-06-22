// next.config.js
const {withFederatedSidecar} = require('@module-federation/nextjs-mf')

module.exports = withFederatedSidecar({
  name: 'nextHost',
  filename: 'static/chunks/emp.js',
  exposes: {
    './home': './components/home',
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
    'next/dynamic': {
      requiredVersion: false,
      singleton: true,
    },
    'next/link': {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  /*  webpack(config, options) {
    if (!options.isServer) {
      config.output.publicPath = 'http://localhost:3002/_next/'
    }
  }, */
})
