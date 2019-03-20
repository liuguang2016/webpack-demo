# 第一阶段：管理资源学习

[^版本version:]: 1.0.0

1.基本的安装与配置

2.通过loader引入其他类型文件

3.显示依赖



# 第二阶段：输出管理

[^版本version]: 1.1.0

上面我一直是在手动的管理输出文件，dist下的index.html。可以想象如果项目变动复杂的话如此做法肯定会带来很多的不方便。该如何解决呢？

1.html-webpack-plugin会生成一个新的index.html输出文件,并自动将生成的bundle添加到其中

2.clean-webpack-plugin清理输出的文件夹

3.webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射

# 第三阶段：开发环境

[^版本version]: 1.2.0

1.为了方便追踪报错，使用source map将编译后的代码映射到原代码中

2.webpack-dev-server修改文件后自动编译且主动刷新浏览器（编译是保存再内存中，不会写出）

# 第四阶段：模块热替换

[^版本version]: 1.3.0

现在的开发大多都是单页的模块化开发，如果页面的某个模块发生改变，一般通过重启服务来查看效果。这就占用了较大的资源和时间，该如何解决呢？

1.通过修改webpack-dev-server的配置，在项目运行时更新所有类型的模块。

# 第五阶段：生产环境配置

[^版本version]: 1.4.0

1.生产环境和开发环境分别配置webpack配置，webpack-merge来写不重复的代码

2.`NODE_ENV` 是一个由 Node.js 暴露给执行脚本的系统环境变量，process.env.NODE_ENV可用来判断环境是否为production

# 第六阶段：代码分离

[^版本version]: 1.5.0

现在的代码打包后都是放在一个bundle中，这意味着在加载时需要一次请求全部的代码，这明显示不合理。正常的代码应该是按功能或需求分开放在不同的代码文件中，然后按需加载，减少加载的时间。

1.在entry入口中手动配置分离代码。

    SplitChunksPlugin剔除重复的代码，wepack配置：

```js
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  }
```

2.动态代码拆分，使用符合ECMA提案的import语法来实现动态导入。

```javascript
output: {
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js',//分离
    path: path.resolve(__dirname, 'dist')
  },
```

# 第七阶段：缓存的管理

[^版本version]: 1.6.0

代码修改发布后，由于浏览器的缓存功能，可能不会去服务器上获取新的代码。这是就需要用户去强制刷新和清理缓存。这样的用户体验很不好，该如何解决呢？

1.通过配置，将不常修改的依赖如react,lodash等库单独打包，而可能频繁改动的代码再打包。当代码内容修改后文件名的hash值发生改变，从而保证浏览器会重新去服务器获取。

```javascript
plugins:[
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns:['**/*','dist']
    }),
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
```

