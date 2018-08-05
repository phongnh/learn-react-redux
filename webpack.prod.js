const path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: './index.jsx',
 output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  mode: 'production',
}
