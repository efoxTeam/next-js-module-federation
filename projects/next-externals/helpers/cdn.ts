const host = `https://unpkg.bdgamelive.com/webupload/gfe`
const envLib = {
  development: {
    react: `${host}/react@17.0.2/umd/react.development.js`,
    'react-dom': `${host}/react-dom@17.0.2/umd/react-dom.development.js`,
    mobx: `${host}/mobx@6.3.7/umd/mobx.development.js`,
    'mobx-react-lite': `${host}/mobx-react-lite@3.2.2/mobxreactlite.umd.development.js`,
  },
  production: {
    react: `${host}/react@17.0.2/umd/react.production.min.js`,
    'react-dom': `${host}/react-dom@17.0.2/umd/react-dom.production.min.js`,
    mobx: `${host}/mobx@6.3.7/umd/mobx.umd.production.js`,
    'mobx-react-lite': `${host}/mobx-react-lite@3.2.2/umd/mobxreactlite.umd.production.min.js`,
  },
}

export default mode => {
  return {
    ...envLib[mode],
  }
}
