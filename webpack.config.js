var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./Public/js/client.js",
  output: {
    path: __dirname + "/public",
    filename: "client.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
          }
        }
       ]
     },
  plugins: debug ? [
    new webpack.DefinePlugin(
      {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    )
    ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  target: 'node'
};
