const path = require('path');
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.(ts|tsx)?$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
      "@": path.resolve(__dirname, "./src"),
    },
  }
}