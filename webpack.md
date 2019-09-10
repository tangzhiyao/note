1）最好全局安装 webpack 和 webpack-cli ，否则使用 webpack 命令需要进入 webpack module 文件夹执行命令。	全局安装 npm i -g webpack



2）新版的 webpack cli 操作改为 webpack   `<entry> -o <output>`。旧版的没有 -o 命令

3）webpack 本身只能处理 JavaScript 模块。如果需要处理其他类型文件需要 loader 进行转换。	

​	安装 loader 模块，如果仅用于开发时，使用 -d 命令，不添加到 package.json 文件里

​	1）所以如果要处理 css 文件就需要使用到 css-loader 和 style-loader。

​		1）css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们；

​		2）style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中；

​	2）加载 css 文件：

​		1）require("!style-loader!css-loader!./style.css")

​		2） require("./style.css")	命令行后加上：--module-bind 'css=style-loader!css-loader'

官网文档链接：<https://www.webpackjs.com/concepts/#loader> 





4）配置 webpack.config.js 文件

```JavaScript
module.exports = {
    entry: "./runoob1.js",	// 入口
    output: {	// 输出
        path: __dirname,	// 最好使用绝对路径
        filename: "bundle.js"
    },
    module: {
        rules: [	// 新版本 webpack 中用 rules 取代了 loaders
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    }
}
// 配置完成后直接使用 webpack 命令就可以执行生成 bundle.js 文件
```

​	1）使用 webpack 内置插件。

​		1）先 npm i webpack --save-dev

​		2）配置文件中引用 webpack

​		3）使用

```javascript
// 使用 webpack 自带的 BannerPlugin 插件，用于在 output 文件头部输出注释信息
var webpack = require('webpack')
var path = requier('path')

module.exports = {
    entry: "./runoob1.js",
    output: {
        path: path.join(__dirname,'filename'),	// 最好使用绝对路径,也可以使用 path 模块来写路径，以避免一些错误
        filename: "bundle.js"
        publicPath: __dirname , // 添加静态资源路径
    },
    module: {
        rules: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
            	// loader 应该是旧的写法。
            	// 另一种写法 use: ['style-loader', 'css-loader']
        ]
    },
    plugins: [
        new webpack.BannerPlugin('菜鸟教程')
    ]
}
```

​	2）webpack.config.js 文件中无法用 import（es6） 导入模块，`需要配置（未解决）`





5）babel		E:\MyWork1\webpack\wp_es6

​	安装 babel 时注意版本冲突	

​	npm install -D babel-loader @babel/core @babel/preset-env  

​	npm i --save-dev  @babel/plugin-transform-runtime 

​	对照官方文档去找

6）	vue-loader

​	1）vue-loader 和 vue-template-compiler 要`一起`安装，且版本需要一致

​	2）除了在 rules 下引用，还需要在 plugins 中配置

```javascript
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```

​	3）webpack 中渲染数据有些不一样：

```html
<template>
    <div>
        {{ str }}   我们的第一个vue程序aa
    </div>
<!--     <div>
        只能包含一个根节点 2.x以后
    </div> -->
</template>
<script>
    export default {
        data() {
            return {
                str: 'hello world'
            }
        }
    }
</script>
```



7）webpack 自动刷新

​	安装 webpack-dev-server        `npm i webpack-dev-server --save-dev`

​	修改当前项目的 package.json 文件：

```javascript
"scripts": {
    "start": "webpack-dev-server --env development",
    "build": "webpack --env production"
}
```

​	使用 `npm run star `或`npm start`启动 ，webpack 会自动创建一个服务器（端口号在控制台显示），每次修改项目内容都会自动刷新。





8）通过 proxy 代理可以在前端解决跨域问题





other：

​	阮一峰 webpack 教程：<https://github.com/ruanyf/webpack-demos> 

​	.vue 后缀文件中写 html 标签没有提示：vscode 安装 vetur 插件，配置文件中加入

```json
"emmet.includeLanguages": {
  "vue": "html",
  "vue-html": "html"
}
```

