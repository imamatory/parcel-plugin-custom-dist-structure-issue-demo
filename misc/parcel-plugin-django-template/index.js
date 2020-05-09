const Bundler = require('parcel-bundler');

module.exports = bundler => {
  bundler.addAssetType('html', require.resolve('./django-template-asset.js'))
};
