const path = require("path");

const webpack = require("webpack");
const LWCWebpackPlugin = require('lwc-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  module: {},
  resolve: {
    alias: {
      lwc: require.resolve('@lwc/engine')
    }
  },
  plugins: [
    new LWCWebpackPlugin({
      namespace: {
        // LWC Namespace with path
        wire: path.resolve('./src/lwc')
      }
    })
  ]
}