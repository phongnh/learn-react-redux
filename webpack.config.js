const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  //Content
  entry: './index.jsx',

  // A SourceMap without column-mappings ignoring loaded Source Maps.
  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),
    //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './index.html'
    }),
    //Auto replacement of page when i save some file, even css
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
  },

  devServer: {
    host: 'localhost',
    port: 8000,
    //Be possible go back pressing the "back" button at chrome
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    contentBase: './dist',
    //hotmodulereplacementeplugin
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader'],
        include: /flexboxgrid/
        //Follow instructions at https://github.com/roylee0704/react-flexbox-grid
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }]
  },

  mode: 'development',
}
