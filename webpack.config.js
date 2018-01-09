//webpack.config.js
var webpack = require('webpack');

module.exports = {
 context: __dirname + '/client_js',
 entry: {
  app: './app.js',
  vendor: ['angular']
 },
 module: {
 	loaders: [
 		{test: /\.js$/, loader: 'babel-loader'}
 	]
 },
 output: {
  path: __dirname + '/bundles',
  filename: 'app.bundle.js'
 },
 plugins: [
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
 ]
};