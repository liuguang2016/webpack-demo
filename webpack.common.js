const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    index:'./src/index.js',
    polyfills:'./src/polyfills.js'
  },
  plugins:[
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:['**/*','dist']}),
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename:'[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  }
};