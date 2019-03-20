const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
      app:'./src/index.js',
  },
  plugins:[
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:['**/*','dist']}),
    new HtmlWebpackPlugin({
        titile:'管理输出'
    })
  ],
  output: {
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
};