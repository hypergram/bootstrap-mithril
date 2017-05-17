/* global __dirname */
const path = require("path");
// const webpack = require("webpack");

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: {
    index: "../index.js"
  },

  output: {
    path: path.resolve(__dirname, "../dist/js"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor"
    // }),
  ],

  devtool: "source-map"

};
