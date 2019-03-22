const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    app:'./src/index.js'
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
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      umd: 'lodash',
      root: '_'
    }
  }
};