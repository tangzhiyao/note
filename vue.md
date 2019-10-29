# 	webpack & vue

### 1）使用 vue

```javascript
import Vue from "vue"	// 引入 vue
import App from "./app.vue"	// 创建的模板
new Vue({
    el: "#id",	// index.html 中预设的元素
    render: function(creater) { // 使用创建的模板代替页面中预设的元素
        return creater(App)	
    }
})
```

### 2）指令

​	1）v-text：在双标签中插入值（内容如果有标签不会被渲染）

```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

​	2）v-html：在双标签中插入值（可以解析标签）+

​	3）v-show：值 true or false，用 display 控制元素是否显示

​	4）v-if： 同上，但是元素是直接删除

​	5）v-bind：单向数据绑定

​			可以对标签内属性的值进行绑定。**标签内属性值不支持用 {{ value }} 直接插入**

```html
 <div v-bind:class="iscolor ? red : green">aaaa</div>
 <div :class="iscolor ? red : green">aaaa</div>  <!-- 简写 -->
 <div v-bind:class="{ 'A':'red', 'B':'green' }">aaaa</div>
 <div class="{{ iscolor }}">aaaa</div>	<!-- 报错 -->
```

​	6）v-on：用来绑定事件

```javas
<button v-on:click = "change">change</button>	// 一般写法
<button @click = "change">change</button>		//简写
<button @click = "change(参数)">change</button>	// 可以进行传参
export default {
    data() {
        
    },
    methods: {
        change(参数) {
            console.log(参数)
        },
    }
}

```

​	7）v-for：循 `对象` 或 `数组` 

```javascript
<li v-for="list in studentList">{{ list.name }}{{ list.score }}</li>
<li v-for="(list,index) in studentList">{{ list.name }}{{ list.score }}</li>
<li v-for="(list,index) in studentList" :key="index">{{ list.name }}{{ list.score }}</li>	// 绑定 key，使页面元素与内存中的对应起来，方便修改，提高性能；key 为字符或者数字。不能使用对象
<li v-for="(value,key,index) in student" :key="index">{{value}}{{key}}{{index}}</li>	//循环对象;	结果共有 5 条数据，第一条：ttzy name 0； 以此类推。不会循环内部的对象 
export default {
    data() {
        return {
             "studentList": [
                    {name: "ttzy1",score: 93},{
                        name: "ttzy2",score: 93}],
                "student": {
                    name: 'ttzy',
                    age: 15,
                    sex: 'w',
                    friend: {
                        name: 'ttzy2',
                        age: 15,
                        sex: 'w',
                    },
                    action() {
                        console.log('eat')
                    }
                }
        }
    }
}
```

​	8）v-model： 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑 

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>	
```

### 3）父子组件的使用

```
// 创建子组件
<template>
    <div><h2>head</h2></div>
</template>

// 父组件中引用
<template>
    <div>
        <headerVue></headerVue>	// 父组件中引用
		// <header-vue></header-vue> 这样也可以引用
    </div>
</template>
<script>
    import headerVue from "dir/header.vue"	// 导入组件
    export default {
        components: {	// 声明组件
			headerVue
        }
	}        
</script>


// 全局组件的使用
// 在 main.js 中引入并声明组件则声明的组件可以在其他地方使用
import headerVue from "dir/header.vue"	// 导入组件
Vue.component('headerVue', headerVue)

```

​	1）父组件传值给子组件

```javascript
// 父组件中给子组件的模板添加属性
<template><div>
        <headerVue text="ttzy"></headerVue>	// 通过 v-bind 传递变量，常量不需要绑定
</div></template>
        
// 子组件通过 props: ['text'] 接受来自父组件中传来的值
// 子组件在 js 中获取父组件传来的变量依然用 this.变量名  
<template><div>
    <h2>head{{ text }}</h2>
</div></template>
<script>
    export default {
        props:['text']
    }
</script>
 

```

​	2）vue-bus 父子组件之间通信

```javascript
// 编写 connector.js，父子组件通信的连接器
// 两个通信的组件必须使用同一个连接器（各自创建vue实例，则无法通信）
import Vue from "vue"
export default new Vue()

// 父组件
// script
import connect from "dir/connector.js"
export default {
    methods: {
        listen() {	// 父组件处于监听状态，才能接受子组件的消息
            connect.$on('phone',function(参数) {})	// parameter1:父子组件的值必须相同
        }
    }
}
// 子组件
//script
import connect from "dir/connector.js"
export default {
    methods: {
        listen() {	// 父组件处于监听状态，才能接受子组件的消息
            connect.$emit('phone',parameter2) // parameter2 向父组件发送的变量
        }
    }
}
```



​	3）css 样式私有化

​		在 style 标签上加入 scoped ，使得样式只适用于当前组件，而不会影响其他组件；

​		还有 >>> 深度作用选择器，`scoped` 样式中的一个选择器能够作用得“更深” ，可以使父组件			影响到子组件		参考：<https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html> 



### 4）vue 过滤器

​	1）滤器既可以在 **双花括号插值** 中使用，也可以在 v-bind 指令的 **表达式** 中使用。 

```html
{{ test | filter }}	
<div v-bind="test | filter"></div>	
```

​	2）全局过滤器

​		在 vue 实例前定义，可以 **跨所有组件** 访问

​		当父组件使用子组件，子组件的过滤器，在父组件和全局都有定义，则全局过滤器生效。

```javascript
Vue.filter('filtername', function(value) {
    return deal_value    // 处理并返回数据局
})
```

​	3）本地过滤器

​		在组件的选项中定义本地过滤器，只能在 **当前组件** 中访问

​		在当前组件中使用的过滤器与全局组件重复定义，则当前组件中的过滤器生效

### 5）获取 DOM & vue 的生命周期

```javascript
<div ref="name"></div>  组件中也可以添加该属性
<headVue ref="tempname"></headVue>
// 在 mounted 阶段获取 DOM 元素
export default {
    beforeCreate() {
        // el 和 data 没有初始化
    },
    created() {
    	// data 完成了初始化，el 没有
	},
    beforeMounte() {
        // 完成 el 和 data 的初始化。
        // 但无法用 this.$refs.name 获取 DOM，结果 undefined
    },
    mounted() {
        // 完成挂载
        console.log(this.$refs.name)
        console.log((this.$refs.tempname) // 获取组件中的标签可以继续用 $refs.元素获取 
    },
    // 每次数据发生变化都会触发这两个函数
    beforeUpdate() {	
        // data 数据更新前的状态     
    },
    update() {
        // data 数据更新后的状态    
    }
    // vue 实例销毁
    beforeDestory() {
        //    
    }，
    destory() {
        // el data 都被销毁,但页面的 DOM 元素依然保留。
        // 后面的页面就不在受 vue 控制
    }
}
```

​	1）为了保证 this 指向 vue 实例，所以包含 this 的函数不要使用 箭头函数

### 6）vue-router 使用

```javascript
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import headerVue from "./components/header.vue"
Vue.use(VueRouter)	// 挂载
let router = new VueRouter({	// 创建路由对象并配置规则
    routes:[
        {path:'/', redirect: '/header'}	// 重定向，默认路径跳转到首页
        {path:'/', redirect: {name: 'head'}	// 使用 name
        {name:'head', path: '/header', component:headerVue},// name 可以不写
        // 多视图时（header 页面有多个 router-view），改为 components: {viewName: vuetemplate}
        // path: '*'	匹配全部
    ]
})
new Vue({
    el: '#app',
    router: router, 
    render: function(creater) {
        return creater(App)
    },  
})
```

```html
<!-- app.vue -->
<template>
    <div>
        <h2>app</h2>
        <a href="#/header">header</a>	// 上面不设置 name 的情况
        <router-link :to="{name: 'head',query:{name:"value"}}">header</router-link>		// 设置了 name,query 用来拼接 url，？name=value 
           // query 改 params 则拼接成 /value，需要在 routes 中声明 path 中添加 path: '/detail/:name'	最后生成的为 /detail/name,需要用 this.$route.params 获取	
        // 避免了修改了 path 导致所有 a 标签的连接都要修改
        // 自动生成 a 标签
        // 在页面中点击该标签时会自动加上 router-link-active 类
        
        <router-view name="name"></router-view>	<!-- app.vue 中需要预留一个 router-view 用来显示模板 -->		// 不加 name 默认为 default，多个 view 在需要在 routes 中配置 components:{nameValue=模板1，nameValue=模板2}	name前加 : 可以选择 routes(main.js) 中的路由显示 
    </div>
</template>
url：在打开 app 页面的基础上输入 header； http://localhost:8080/#/header
```

```html
// header.vue
<template>
	header
</template>
<script>
    export default {
        mounted() {
            console.log(this.$route.query)	// 获取 url 中的参数
            						// 注意 $route 和 $router 的区别
        }
    }
</script>
```

​	1）通过事件实现页面跳转

```javascript
export default {
    methods: {
        goback() {
        	this.$router.go(-1);// 触发事件则返回上一页，  
        },
        gonext() {
            this.$router.go(1);// 触发事件则回到下一页，  
        },
        toother() {
            this.$router.push({
                name: 'name', // 可以传入 main.js 中配置的 routes 的 name 属性，也可以直接在 push 中传入字符串（url），例如：push('/detail'),也能加 query 属性；和上面 router-link 标签的内容有点像。
            });
        }
    }
}
```

​	2）嵌套路由

```javascript
let router = new VueRouter({
    routes: [
        { path: '/', redirct: '#' },
        { name: 'music', path: '/music', component: musicVue, children: [
            { name: 'ouemi', path: '/ouemei', component: oumeiVue },	// 不加 / 代表相对路径，url 为 /music/oumei；加了之后就是 #/oumei
            { name: 'neidi', path: '/neidi', component: neidiVue }
            // 子路由名称前可以 加上父路由的 name 来标识，如：music_oumei 
        ]}
    ]
})
```

![嵌套路由](C:\Users\tzy\Desktop\笔记\img-git\嵌套路由.png)

​	app.vue 中包含 header 、music 和 footer，music 中包含 `内地` 和 `欧美` ,点击能够切换不同的视图

​	案列:Vue_router

vue-router 的钩子函数

1. Vue.beforeEach(function(to,form,next){})  	在跳转之前执行

* to：需要跳转到的页面
* from：从哪个页面跳转过来的
* next：函数中需要执行一次

2. Vue.afterEach(function(to,form))	在跳转之后判断





### 7）Mint-ui

用 MintUI 引入非组件的内容需要，先引入该组件，再使用

```javascript
<template>
    <div>
        <button @click="handleClose">show Toast</button>
    </div>
</template>
<script>
    // 使用 Toast
    import { Toast } from 'mint-ui';
    export default({
        methods: {
            handleClose() {
                Toast('aaa')
            }
        },
    })
</script>

```

### 8）axios 

基础配置

```javascript
import App from './app.vue'	// 加载模块

Vue.prototype.$axios = Axios	// 将 axios 挂载到全局，使得可以用 this.$axios 来使用 axios
```



1）post 方法从接口取数据

```javascript
this.$axios.post('http://127.0.0.1:50001/')
                .then(res => {
                    this.data = res.data
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
// 请求后台接口获取 json 数据，出现 CORS 错误需要后台设置

this.$axios.get('url',{
    params: {	// url 问号传参	
    },
    headers: {},
    baseURL: '', // 设置之后会导致后面的请求的 baseURL改变
})
this.$axios.post('url',{提交的信息},{
    // 配置
    headers: {}
})
```

2）配置 axios 的默认值（全局）

​	axios.defaults.baseURL = 'https://api.example.com';	配置默认的 url

3）axios.all() 合并请求

```javascript
this.$axios.all([
    this.$axios.post('url','content'),	
    this.$axios.get('url')
])
    .then(this.$axios.spread(function(res1,res2) {	// 当所有请求都成功才返回数据
    	console.log(res1)
    	console.log(res1)
}))
```

4）拦截器

```javascript
Axios.interceptors.request.use(function(config) {	// 每有一次请求则拦截一次
    console.log(config)
    return config	// 不返回一个 config 则请求发送不出去
})
Axios.interceptors.response.use(function(config) {	// 拦截响应
    console.log(config)
    return config	// 需要返回 config
})
// 例子：
// loding 显示，发送请求时在 request 拦截器中加入 loding 图标，response 中取消 loding 图标
```

5）侦听器

​	vue 提供 watch 方法，监听数据变化

```javascript
export default {
    watch: {
        dataname(newValue, oldValue) {
            console.log(new)	// 每当 dataname 数据改变就会触发函数
        },
        objectname: {	// 当数据为复杂数据类型需要用深度监视
        	handler: function(newValue,oldValue) {},
            deep: true       
         }                
    }
}
                        
```

### 9）mockjs 的使用

安装：`npm i mockjs`

1. 项目中创建 mock.js 文件

   ```javascript
   // mock.js
   import Mock from "mockjs"
   Mock.mock('/test','post',{
   	name: 'ttzy',
       "string|1-10": "★"
   })
   ```

2. main.js 文件中引用 mock.js 文件 `require('src/mock.js')`

3. vue 中发送请求到 mock.js 中设置的路径，获取数据

