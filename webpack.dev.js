 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
    contentBase: './dist'
   },
   plugins:[
     new webpack.ProvidePlugin({
       join:['lodash','join']
     })
   ],
   module:{
     rules:[
       {
         test:require.resolve('index.js'),
         use:'import-loader?this=>window'
       },
       {
        test:require.resolve('global.js'),
        use:'import-loader?file,parse=helpers.parse'
      }
     ]
   }
 });