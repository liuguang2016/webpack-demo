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

