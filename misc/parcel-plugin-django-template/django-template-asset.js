const HTMLAsset = require('parcel-bundler/lib/assets/HTMLAsset')

function shouldIgnore (file) {
  return /{[{%].+[}%]}/.test(file)
}

class SkipPythonTemplateAsset extends HTMLAsset {
  addDependency (name, opts) {
    if (!shouldIgnore(opts.resolved)) {
      return super.addDependency(name, opts)
    }
  }

  processSingleDependency (p, opts) {
    if (shouldIgnore(p)) return p
    else return super.processSingleDependency(p, opts)
  }
}

module.exports = SkipPythonTemplateAsset

