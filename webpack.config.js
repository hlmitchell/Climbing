const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: 'build'
  },
  module: {
    rules: [
      {
        test: /jsx?|js?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  },
  node: {
    fs: "empty",
    net: 'empty'
  },
  mode: "development",
};