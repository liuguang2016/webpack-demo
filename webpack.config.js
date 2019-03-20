const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
      app:'./src/index.js',
  },
  plugins:[
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:['**/*','dist']}),
    new HtmlWebpackPlugin({
        titile:'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename:'[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};