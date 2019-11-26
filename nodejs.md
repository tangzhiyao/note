##### 1.文件的读取

var fs = require('fs')

   第一个参数就是要读取的文件路径
   第二个参数是一个回调函数          
        成功
          data 数据
          error null
        失败
          data undefined没有数据
          error 错误对象

// 文件的相对路径不是相对于当前文件的。而是根据 node 执行的终端的路径去找需要读取的文件。        （app.use 中也有影响，加载模块的路径不受影响）

例： 当前 js 文件在 d:\cur 文件夹中，a.txt 在 d:\cur\data 文件夹中。

​	如果终端的所处位置在 d:\cur 目录下执行该文件 node test.js，则能正常运行。

​	如果终端的所处位置在 d:\ 目录下执行该文件 node cur/test.js ,则提示找不到 a.txt 文件，node 会在 d:\cur 目录下找 a.txt （d:\cur\a.txt）。

​	所以需要使用绝对路径。可以使用 __dirname 或 \_\_filename 获取文件的绝对路径

fs.readFile('./data/a.txt', function (error, data) {
	data中的数据为：文件中存储的二进制数据转化为十六进制
 	需要通过 toString 方法把其转为我们能认识的字符

​	在这里就可以通过判断 error 来确认是否有错误发生
  if (error) {
    console.log('读取文件失败了')
  } else {
    console.log(data.toString())
  }
})



##### 2.模板引擎art-template

​	var temp = require('art-template')
	var fs = require('fs')
	fs.readFile()
	var res = temp.render("hello {{ name }}",{
		name: 'zzz'
	})

​	console.log(res)      输出结果为    hello zzz

​	读取html文件替换字符串

​	var temp = require('art-template')
	var fs = require('fs')
	fs.readFile("./art-template.html",function(error,data) {
		if(error){
			console.log("read false")
		}else {					// 注意：data需要用toString方法转换
			var res = temp.render(data.toString(),{
			name: 'zzz'
			})
			console.log(res)
		}
	})

##### **3.url参数处理**

​	当传过来url中带有参数 例：127.0.0.1:5000/path?name=asd&pass=456456

```javascript
var url = require('url')							'name=asd&pass=456456'
var obj = url.parse(req.url,true)  true参数可以使obj的query属性从字符串变成对象  {name:'asd', pass:'456456'}
obj.pathname                 //获取url中的path
```

4.重定向

​	res.statusCode = 302;      res.setHeader('Location','url');  最后加上 res.end()

5.服务端最后一定要加上 res.end()  无论是否传输数据

6.statusCode：	301  永久重定向     第一次 请求 a 跳到 b  第二次  不会再去请求 a 会直接跳到b   

​				302  临时重定向	一直和第一次一样

​			        500 – 内部服务器错误 





##### **4.模块系统**

​	exports.属性名 =  需要导出的属性名           可以供外部使用该属性或方法   //用于需要导出多个属性或方法

​	module.exports =  需要导出的属性名     //导出单个属性或方法

​	

```javascript
module.exports = {
    age: 15
}

exports = module.exports // 重新指向后， foo 才能被导出

exports.foo = "aaa"

```

当 a.js  require b.js， a.js  require c.js （在 require b 之后），  b.js  require c.js，

b 和 c 都是一个console 语句

运行 a.js ： b.js console 执行输出语句，然后 c.js 执行输出语句。但 a.js 不会再重复执行 c.js 中的 console 语句，但是能拿到 c.js 中的 module 导出的内容 （b.js 执行时已经加载过 c.js ，缓存中已经有了。所以 a.js 执行时直接拿到导出内容）

* 模块加载顺序

  文件模块缓存 > 原生模块 > 文件模块

  ![](C:\Users\tzy\Desktop\note\img-git\nodejs\nodejs-require.jpg)



##### **5.第三方模块加载过程**

​	首先找到 node_modules 文件夹，再找 文件夹下的 需要加载模块的文件夹，再找到该文件夹下的 package.json  文件，找到其中的 main 属性，获得入口文件名（例 are-template 中的 main 属性值为 index.js），找到后再去加载入口文件，获取文件的 exports

查找规则：从当前文件夹开始找 node_modules 文件夹，没有则继续向上一级文件夹查找。直到当前磁盘根目录

三种模块加载： 核心模块、路径形式的文件模块、第三方模块

**推荐书**《深入浅出node.js》一些 node 底层原理



##### 6.npm 的一些用法：

​	package.json和package-lock.json的区别

​	package.json:

​		主要用来定义项目中需要依赖的包

​	package-lock.json：

​		在 `npm install`时候生成一份文件，用以记录当前状态下实际安装的各个npm package的具体来源和版本号。



​	npm install  模块  --save    会在 package.json 里保存当前项目的依赖信息 （用了哪些模块） 不加 --save 则不会保存。   npm uninstall 也可以加 --save，作用删除依赖项

​	npm init 初始化一个 package.json 文件。有了 package.json 即使删除 node_modules 文件夹也可以直接用 npm install  命令安装全部依赖  (之前装过的依赖在 packjson 中有记录，所以建议安装 module 时在后面加上           --save) 。 后面加上 -y 可以快速生成，跳过向导

​	npmjs.com  一些开发者上传的包，可以直接用 npm 下载

 	nodemon 安装： npm i --global nodemon   nodemon 是一个工具可以在服务器启动时，修改源码自动重启服务器。			使用方法： nodemon   app.js

​		

安装时通过淘宝镜像：npm config set registry https://registry.npm.taobao.org



##### 7.express

```javascript
const express = require('express') //基本引用
const app = express()
app.get('/',function(req, res) { // get 方法请求
    res.send('hello world')
})
app.post('/',function(req, res) { // post 方法请求
    res.send('hello world')
})
app.get('/about', function(req,res) {
    res.send('hello about')
})
app.listen(3000,function() {
    console.log('server running')
})
```

1）控制可以公开访问的资源   app.use('/public/',express.static('./public/'))   // 第一个参数是浏览器输入的路径可以随便起。      public 下的所有文件都可以访问    

​	路径是相对于 node 运行环境的路径。所以 static 里的路径用 __dirname 来写 	



2）node-express  和 art-template 的组合使用

```javascript
app.engine('html',require('express-art-template'))
		// 参数1：文件名后缀，可以自定义
app.set('views', __dirname + '/views')
		// 参数1：找到 views 目录下的模板文件；参数2： views 目录的路径
app.get('/index.html', function(req,res) {	
	res.render('index.html', {	// 参数1：渲染 views 下的index.html；参数2：可选，渲染的数据
		comments: comments
	})
})
// 注意要把一些资源开放出来（aap.use），否则 html 无法加载 css，js 等文件；
```

res.redirect(‘url') 实现页面跳转 



3）express 原生不支持获取 post 请求中的数据（get 可以用 req.query 获取值），所以需要第三方插件（body-parser）。<http://expressjs.com/en/resources/middleware.html> 

安装：npm install body-parser

使用：

```javascript
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/post',function(req,res) {
	console.log(req.body)	// 获取 post 传来的值
})
```

4）express.Router 的使用

```JavaScript
//app.js
const express = require('express') 
const router = require('./router')	// 加载路由文件

const app = express()

//  配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
app.engine('html',require('express-art-template'))
// app.set('views',__dirname + '/views')
// parse application/json
app.use(bodyParser.json())

app.use(router)	// 把路由挂载到 app 服务中  （尽量放在后面，以免出现错误）

app.listen(50001,function() {
    console.log("server running")
})


/**** router.js ****/

const fs = require('fs')
const express = require('express') 

// 创建路由容器
const router = express.Router()

/** 读取 db.json 中的数据 */
var students
fs.readFile('./db.json',function(error, data) {
    if(error) {
        console.log('读取失败')
    } else {
        // console.log(data.toString())
        students = data.toString()
        students = JSON.parse(students)
    }
})

/** 把路由都挂载到路由容器中 **/
router.use('/public/',express.static('./public/'))
router.use('/node_modules/',express.static('./node_modules/'))

router.get('/index.html',function(req, res) {
    res.render('index.html',{
        students: students.students
    })
})

/**** 一定要导出 router ****/
module.exports = router
```

5）处理其他没有匹配的路径

```javascript
/**放在所有路由中间件之后**/
//原理：当前面所有路由都无法匹配时，就走该段代码
app.get('*', function(req, res) {
    res.render('404.html')
})
```

6）子模板

​	类似 php 的 include ，可以引用相同的部分（头部，导航栏）

7）前端跨域资源请求

```javascript
// 需要在路由之前加入下面代码，否则前台请求时会出现CORS跨越问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next(); 
    }
});
```

​	 **CROS**：

     CORS，常被大家称之为跨越问题，准确的叫法是跨域资源共享（CORS，Cross-origin resource sharing），是W3C标准，是一种机制，它使用额外的HTTP头来告诉浏览器 让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。

     http://localhost:8080 请求 http://localhost:50001 就是违背了上述原则，即：请求服务器不同端口的另一个资源，出于安全原因，浏览器限制发起的跨源HTTP请求，则会出现异常。

     例如，XMLHttpRequest和Fetch API遵循同源策略， 这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非使用CORS头。

跨域资源共享（ CORS ）机制允许 Web 应用服务器进行跨域访问控制，从而使跨域数据传输得以安全进行。浏览器支持在 API 容器中（例如 XMLHttpRequest 或 Fetch ）使用 CORS，以降低跨域 HTTP 请求所带来的风险。

##### 

​	（查看：mongoDB.md）

​	1）mongoose 中的所有数据库操作都会返回一个 Promise 对象（数据库的操作都是异步的），需要注意 .then() 接受的返回值是否正确









##### 其他

​	1）__dirname 获取当前文件模块所属目录的绝对路径

​	      __filename 可以用来获取当前文件的绝对路径

​	2）path 模块提供一些操作路径的方法。

​		如： path.join('d:a/','c.txt')   组合成 'd:a/c.txt',自动拼接，能够避免一些手动拼接时的错误















​	

