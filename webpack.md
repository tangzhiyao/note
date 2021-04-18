1. 最好全局安装 webpack 和 webpack-cli ，否则使用 webpack 命令需要进入 webpack module 文件夹执行命令。	全局安装 npm i -g webpack webpack-cli

2. 新版的 webpack cli 操作改为 webpack   `<entry> -o <output>`。旧版的没有 -o 命令

3. webpack 本身只能处理 JavaScript 模块。如果需要处理其他类型文件需要 loader 进行转换。	`loader的执行顺序是从后往前`

   安装 loader 模块，如果仅用于开发时，使用 -d 命令，不添加到 package.json 文件里

   1. 所以如果要处理 css 文件就需要使用到 css-loader 和 style-loader。

      * css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们；

      * style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中；

   2. 加载 css 文件：

      * require("!style-loader!css-loader!./style.css")
      *  require("./style.css")	命令行后加上：--module-bind 'css=style-loader!css-loader'

      官网文档链接：<https://www.webpackjs.com/concepts/#loader> 

      

4. 配置 webpack.config.js 文件

   ```javascript
   module.exports = {
       entry: "./runoob1.js",	// 入口
       output: {	// 输出
           path: __dirname,	// 最好使用绝对路径
           filename: "bundle.js"
       },
       module: {
           rules: [	// 新版本 webpack 中用 rules 取代了 loaders
               {	test: /\.css$/, 
                	use: [ 'style-loader', 'css-loader' ]
                // 加载顺序 css-loader --> style-loader 
                 // 旧写法: loader: "style-loader!css-loader",
               }
           ]
       }
   }
   // 配置完成后直接使用 webpack 命令就可以执行生成 bundle.js 文件
   ```

   * 使用 webpack 内置插件。

     1. 先 npm i webpack --save-dev
     2. 配置文件中引用 webpack
     3. 使用

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

   * webpack.config.js 文件中无法用 import（es6）导入模块，`需要配置`

     * 将文件名改为**webpack.config.babel.js**。需要在package.json配置babel

       ```javascript
       "babel": {
           "presets": [
             [
               "@babel/preset-env",
               {
                 "targets": {
                   "node": "current"
                 }
               }
             ]
           ],
           "plugins": [
             "transform-es2015-modules-commonjs"
           ]
         },
       ```

   * 常用 loader		<https://www.jianshu.com/p/71b811e973d4> 

     * 处理静态文件：file-loader、url-loader(图片处理)、raw-loader(将文件导入为字符串。)
* 处理样式模块：style-loader、css-loader、sass-loader、less-loader、postcss-loader(自动给样式增加前缀)
   * 处理数据文件：csv-loader、xml-loader'
   * 处理模块语言：html-loader、markdown-loader
   * 处理测试模块：mocha-loader、eslint-loader

5. babel		E:\MyWork1\webpack\wp_es6

   安装 babel 时注意版本冲突
	
	npm install -D babel-loader @babel/core @babel/preset-env  
	
	npm i --save-dev  @babel/plugin-transform-runtime 
	
	对照babel官方文档去找

6. [vue-loader](https://vue-loader.vuejs.org/zh/guide/#vue-cli)

   npm i vue-loader  vue-template-compiler

   * vue-loader 和 vue-template-compiler 要`一起`安装，且版本需要一致
   * 除了在 rules 下引用，还需要在 plugins 中配置

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

   * webpack 中渲染数据有些不一样：

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

7. webpack 自动刷新

  * 安装 webpack-dev-server        `npm i webpack-dev-server --save-dev`

  * 修改当前项目的 webpack.config.js 和  package.json 文件：

    ```javascript
    // webpack.config.js
    module.exports {	// 
      // ...其他配置
      devServer: {
      		contentBase: './dist' // 选择编译后的目录
      },
    }
    
    // package.json  
    "scripts": {
        "start": "webpack-dev-server --env development",
        "build": "webpack --env production"
      }
    ```

  * 使用 `npm run star `或`npm start`启动 ，webpack 会自动创建一个服务器（端口号在控制台显示），每次修改项目内容都会自动刷新。

  * 多入口配置，url 访问路径为 /文件名.html，或者访问 `/webpack-dev-server` 直接查看文件目录。

    还有其他路径可以在查看 `/node_modules/webpack-dev-server/lib/utils/routes.js` 文件中查看 

    

8. 通过 proxy 代理可以在前端解决跨域问题

9. 开启SourceMap

   由于编译后的 bundle 文件经过混淆，且多个 js 文件混在一起，如果其中某个 js 文件报错，控制台只会指向到 bundle 文件，无法确认到底是哪个文件报错，所以需要添加sourceMap 帮助我们找到报错的来源文件。

10. 配置less

    vue-loader 文档中，使用了 vue-style-loader 代替了 style-loader。但是我本地的项目并不能正常运行。编译能够通过但是样式并没有正确的加上（待解决）。

    ```javascript
    {
      test: /\.less$/, 
      use: [ 'style-loader', 'css-loader', 'less-loader' ]
    }
    ```

11. MiniCssExtractPlugin 分插件离css

    需要注意：extract-text-webpack-plugin插件只能用于旧版本(3.x)的webpack，即使是`@next` 也无法使用。

    使用改插件的时候要替换掉原来的 `style-loader` 

    ```javascript
    { test: /\.css$/, use: 
        [ MiniCssExtractPlugin.loader,  'css-loader' ]
     // 不分离时的写法: [ 'style-loader', 'css-loader' ]
    }  // 配置预处理器的时候也需要替换
    ```

    



other：

​	阮一峰 webpack 教程：<https://github.com/ruanyf/webpack-demos> 

​	.vue 后缀文件中写 html 标签没有提示：vscode 安装 vetur 插件，配置文件中加入

```json
"emmet.includeLanguages": {
  "vue": "html",
  "vue-html": "html"
}
```

