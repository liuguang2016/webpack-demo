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



