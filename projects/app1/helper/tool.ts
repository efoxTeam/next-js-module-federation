const Module = require('module')
const path = require('path')
export function requireFromString(code: string, filename?: any, opts?: any) {
  if (typeof filename === 'object') {
    opts = filename
    filename = undefined
  }

  opts = opts || {}
  filename = filename || ''

  opts.appendPaths = opts.appendPaths || []
  opts.prependPaths = opts.prependPaths || []

  if (typeof code !== 'string') {
    throw new Error('code must be a string, not ' + typeof code)
  }

  const paths = Module._nodeModulePaths(path.dirname(filename))

  const parent = module.parent
  const m = new Module(filename, parent)
  m.filename = filename
  m.paths = [].concat(opts.prependPaths).concat(paths).concat(opts.appendPaths)
  m._compile(code, filename)

  const exports = m.exports
  parent && parent.children && parent.children.splice(parent.children.indexOf(m), 1)

  return exports
}
