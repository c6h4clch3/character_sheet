const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'main': './electron/mainapp.ts',
    'application/index': './electron/application/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loader: 'sass-loader'
      }
    ]
  },
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './electron/index.html',
      filename: path.join(__dirname, 'dist/', 'index.html'),
      inject: false
    })
  ]
};
