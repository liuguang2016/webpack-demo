const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry:{
      app:'./src/index.js',
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  plugins:[
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:['**/*','dist']}),
    new HtmlWebpackPlugin({
        titile:'管理输出'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
};