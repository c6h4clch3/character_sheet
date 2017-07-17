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
        test: /\.ts$/,
        use: [
          'ng-annotate-loader',
          'babel-loader',
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader?-autoprefixer',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader?-auto-prefixer',
          'postcss-loader'
        ]
      },
      {
        test: /\.html/,
        use: [
          'html-loader?interpolate=require'
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          'url-loader?prefix=font/&limit=5000'
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'url-loader?limit=10000&mimetype=application/octet-stream'
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'url-loader?limit=10000&mimetype=image/svg+xml'
        ]
      }
    ]
  },
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [".js", ".ts", ".html", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './electron/index.html',
      filename: path.join(__dirname, 'dist/', 'index.html'),
      inject: true,
      excludeChunks: ['main']
    })
  ]
};
