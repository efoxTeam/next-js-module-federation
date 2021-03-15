async function requireRemote(url) {
  const code = await fetch(url).then(res => res.text())
  return requireFromString(code, url)
}

function requireFromString(code, filename) {
  // var Module = module.constructor
  // Object.keys(module).map(k => console.log(k, m[k]))
  // console.log(global, process, code, filename)
  // eval(code)
  let staticHost = {}
  code = code.replace('var staticHost;', '')
  const vm = require('vm')
  vm.runInThisContext(code)
  console.log(staticHost)
  return module.exports
}

module.exports = {
  requireFromString,
  requireRemote,
}
