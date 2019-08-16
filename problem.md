1.display:    js 给元素设置 display：none 属性隐藏后，再设置 display：block...等属性值显示 会使失去原来的样式。最好使用visbility：hidden，visible控制隐藏和显示

2.给子元素 display 设置为 inline-block 会撑大父元素，有一个下边距（因为 inline-block 元素的 vertical-align 默认值是 baseline 即：对象的底边与文本的基线对齐 ）设置  vertical-align: bottom 解决

3.使用 float 之后，会使元素脱离文档流，无法使用 margin：0  auto；使元素居中

4.遇到包裹文字的标签要注意文字过长时超出标签范围，需要加以限定

5.原生 js 可以使用  classList.add()  classList.remove()   来添加或删除一个类

6.使用 document 获取的元素列表无法直接用 foreach 直接循环，需要用 Array.from(元素) 转换成数组

7.使 使用绝对定位的元素居中 可以使用 left: 50%；margin-left:  **-**元素宽度一半; 来实现

8. p 标签内不能嵌套 div 。内联 = 行内。p div{}  选择器无法选中

		块元素可以包含内联元素或某些块元素，但内联元素却不能包含块元素 只能包含其他的内联元素 

9.域名解析 --> 发起TCP的3次握手 --> 建立TCP连接后发起http请求 --> 服务器响应http请求，浏览器得到html代码 --> 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 浏览器对页面进行渲染呈现给用户

10. 使用伪元素显示一些效果需要加上 content：“”； 否则无法显示出来

11. data-属性名，自定义属性，data-* 属性用于存储页面或应用程序的私有自定义数据。

    		data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。
    	
    		存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服	务器端数据库查询）。
    	
    		data-* 属性包括两部分：
    	
    		属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
    	
    		属性值可以是任意字符串

12. 小程序：当内容高度超过 swiper 组件默认高度后就不显示多出的内容。

    		在 swiper 标签中设置 style="height:{{toalHei}}"  
    	
    	把每个 swiper-item 内所有内容都单独装在一个容器中，在 js 中获取该容器的高度，再设置给toalHei

13. 图片要给个父容器进行宽高限制

14. class1和class2同级相邻，若要 class1：hover 控制 class2 可以用加号   class1：hover  +  class2 {}

15. 相邻元素阴影覆盖，需要在前一个加 position：relative   和  z-index；

16. background 同时设置多个背景颜色无效，将第一个改为渐变色     

    	background: linear-gradient(#61bd12, #61bd12) no-repeat left,blue;     background-size: 15%; 

17. 函数中不使用 var 声明变量 则该变量为全局变量 ，可以用 window.value 获取该变量

18. js 获取元素属性值进行运算需要注意 转化成int 或 float类型，否则用 + 号元算时可能会变成字符串连接

19. HTML行内块状元素设置了CSS属性值`display:inline-block`代码被回车换行，在前端浏览器渲染后会产生空白占位符从而破坏网页布局！    解决： 1）设置父容器font-size：0； 2）使行内块元素浮动；3）注释空白区域

20. ie10 不支持 let 定义属性

21. 当单独设置 border-left（其他同理）时，边框是个矩形， 当有相邻边框时，两条边相邻部分是条斜线，也就是边框并非一个矩形

22. null == undefined   true                            null === undefined     false

    	ECMAScript认为undefined是从null派生出来的，所以把它们定义为相等的。 

    3. 当缩略图和大图有关联的时候，不要分开写（从数据库取数据要用两次循环），通过对缩略图添加自定义属性获取大图的src	

23. mysql 数据库报错：Server sent charset unknown to the client

    mysql配置文件（my.ini）存在两个位置：

    ​	1）Program Files 下的 MYSQL 中；

    ​	2）隐藏文件夹ProgramData 下的 MYSQL 中。

    ​	在 1）中的配置文件修改 character_set_server 的字符集，没有效果。必须要到2）中的配置文件修改

24. ```css
    background-repeat: round;/*如果图片大于容器则缩放到与容器大小一致*/
    ```

25. this 传递丢失

    ```javascript
    var obj = {
          a: 1,    // a是定义在对象obj中的属性
          fire: function () {
             console.log(this.a)
          }
    }
    var a = 2;  // a是定义在全局环境中的变量  
    var fireInGrobal = obj.fire;
    fireInGrobal();   // 输出2
    ```

26. Math.max(min) 求最大(小)值

    ```javascript
    Math.max.apply(null, [1,3,2,4,5])
    ```

27. JavaScript 中的 `参数1 && 参数2` ，当参数1为真，总会返回参数2（即使参数2为 false ）

    ```javascript
    true && "aaa"
    "aaa"
    
    false && "aaa"
    false
    
    0 && "aaa"
    0
    
    null && "aaa"
    null
    
    undefined && 'aaa'
    undefined
    
    'a' && 'aaa'
    "aaa"
    
    true && false
    false
    ```

28. 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键 

29. react 和 vue 中 key 的值尽量不要用数组下标，改变数组顺序 key 的值也会被改变。最好用元素的 id，避免一些问题

30. react 不要在 render 中使用 setState，会导致死循环

    渲染组件(render) => 触发 setState => 又触发渲染组件 。。。

31. 函数的参数使用 `...` 运算符，函数体内得到的是一个数组

    ```javascript
    function open(...obj) {
    	console.log(obj)
    	return {
    		...obj
    	}
    }
    open(3)
    // 输出： [3]
    // 返回值 {0: 3}
    
    open({
    	name: 'ttzy',
    	age: 15
    })
    // 输出：[{...}]
    //		0: {name: "ttzy", age: 15}
    // 		length: 1
    // 		__proto__: Array(0)
    
    // 返回值：{0: {...}}
    // 		0: {name: "ttzy", age: 15}
    // 		__proto__: Object
    ```

32. ```javascript
    undefined ? true : false	// false
    '' ? true : false	// true
    '' == false		 // true
    undefined == false 		// false
    '' == undefined 	// false
    0 == false		//true
    null == undefined	// true; undefined 派生于 null 的
    ```

33. ```javascript
    var a;
    // var b;	// 未声明
    
    typeof a;	// undefined
    typeof b;	// undefined
    ```

34. NaN本身有两个特点：  

    1）任何涉及到NaN的操作（比如NaN/10）都会返回NaN  

    2）NaN与任何值都不相等，包括自己本身。 

    ```javascript
    0/0				 // NaN
    5/0 			 // Infinity
    -5/0			 // -Infinity
    Number(5)/0		  // Infinity
    new Number(5)/0   // Infinity
    
    ```

35. Number() 会对非数字类型的变量进行转换

36. ![chrome_devTool](C:\Users\tzy\Desktop\note\img-git\chrome_devTool.png)

    深颜色属性可以计数。浅颜色、显示暗淡的属性则不可计数。

    参考：<https://developers.google.com/web/tools/chrome-devtools/javascript/step-code?hl=zh-cn> 

37. 标签换行在 chrome 浏览器中显示一个空格

38. a 标签内部包含a标签在chrome会产生奇怪的错误

39. 多行的行内元素垂直居中

    使用 display: table-cell 和 vertical-align: middle 属性来定义需要居中的元素的父容器元素生成效果，如下：

    ```css
    .parent {
        background: #222;
        width: 300px;
        height: 300px;
        /* 以下属性垂直居中 */
        display: table-cell;
        vertical-align: middle;
    }
    ```

40. 给 input:text 设置 keydown 按下时无法获取`当前`按下的字符值。页面渲染字符慢于代码执行。解决：在里面加入一个定时器，使代码后执行；这种方法可以用来防止阻塞后面代码的执行；

    ```javascript
    input.onkeydwon(function() {
        console.log(this.value)
        let that = this
        setTimeout(function(){
            console.log(that.value)	// 独立调用。this 执行 window
        },0)
    })
    ```

    

41. 匿名函数的执行具有全局性，内部的 this 指向  `window`，因此可以在外部函数中用变量接收 this，再传给匿名函数。 (javascript高级程序设计7.2.2 p182)

42. 绝对定位元素的水平垂直居中

    1. 已知宽高，使用 top: 50%; margin-top: -width/2;

    2. 未知宽高，使用 top: 50%; transform: translateX(-50%);

    3. 使用 display: table-cell  ` (不适用绝对定位)`

       ```css
       .parent {
       		display: table;	/* 可以不写*/
       		width: 250px;
       		height: 250px;
       		border: 1px solid black;
       }
       .child {
       	width: 100px;
       	height: 100px;
       	display: table-cell;	/* 让元素内部元素垂直居中 */
       	vertical-align: middle;
       	border: 1px solid black;
       }
       ```

    4. left:0; right:0;margin:auto;

    ```css
    .parent {
            width: 250px;
    		height: 250px;
    		border: 1px solid black; 
            position: relative;
        }
    .child {
        width: 100px;
    	height: 100px;
        background-color: pink;
        position: absolute;
        left: 0;
        right: 0;	/* 与 left 组合，水平居中 */
        top: 0;
        bottom: 0;	/* 与 right 组合，垂直居中 */
        margin: auto;
    }
    ```

43. 函数表达式后可以直接加括号立即执行；

44. 对象在与基本类型比较时会调用 toString 或 valueOf 方法转换在比较，可以改写这两种方法。

45. 闭包的作用：

    1. 能够访问函数所在的环境上下文，阻止被回收；

    2. 私有化变量

       ```javascript
       (function(){
           var a = 'tttzy';
           getA = function () {	// 没有加关键字，声明在全局
       		console.log(a)
           }
       })()
       ```

    3. 模拟块级作用域(立即执行函数内部 return 函数)

    4. 创建模块

       ```javascript
       function test() {
           var a = 't';
           var getA = function() {
               console.log(a)
           }
           return {
               getA,
           }
       }
       ```

46. 事件循环机制？

    JavaScript 是单线程，执行顺序 主线程 => 微任务 => 宏任务

    定时器时 宏任务；Promise 是微任务 

47. 定时器的第二个参数指定的时最小等待时间，不代表经过设定的时间后就一定执行。定时器时异步的需要等到主线程执行完成后才能进行。

48. 使用new Date(year,month,0)的方式,可以获取该月的最后一天 

49. 在 Date 构造函数中传入大于 11(Date 对象中 1 月用 0 表示) 的月份，会自动转化为下一年对应的月份。 

    ```javascript
    // 48、49
    new Date(2018,2,0)
    // Wed Feb 28 2018 00:00:00 GMT+0800 (中国标准时间)
    
    new Date(2018,13,1)
    // Mon Apr 02 2018 00:00:00 GMT+0800 (中国标准时间)
    ```

50. 正则表达式：圆括号可以匹配多个连续的字符，而一对方括号只能匹配单个字符，并且特殊字符写在[]会被当成普通字符来匹配。例如[(a)]，会匹配(、a、)、这三个字符。 

    ```
    // 前瞻：
    exp1(?=exp2) 查找exp2前面的exp1
    // 后顾：
    (?<=exp2)exp1 查找exp2后面的exp1
    // 负前瞻：
    exp1(?!exp2) 查找后面不是exp2的exp1
    // 负后顾：
    (?<!exp2)exp1 查找前面不是exp2的exp1
    ```

51. 循环给页面添加节点，必须在循环内创建新的节点。如果在循环外创建节点，在循环内不断执行添加节点的操作，该节点始终只添加一次，如果给多个 dom 添加该节点，则只会加在最后一个 dom 节点中(从第一个一直挪动到最后的节点)。

**问题** （未解决）

2.JavaScript 单线程和事件循环，异步	259  268

