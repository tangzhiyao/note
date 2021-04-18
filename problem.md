1.display:    js 给元素设置 display：none 属性隐藏后，再设置 display：block...等属性值显示 会使失去原来的样式。最好使用visbility：hidden，visible控制隐藏和显示

2.给子元素 display 设置为 inline-block 会撑大父元素，有一个下边距（因为 inline-block 元素的 vertical-align 默认值是 baseline 即：对象的底边与文本的基线对齐 ）设置  vertical-align: bottom 解决

3.使用 float 之后，会使元素脱离文档流，无法使用 margin：0  auto；使元素居中

4.遇到包裹文字的标签要注意文字过长时超出标签范围，需要加以限定

5.原生 js 可以使用  classList.add()  classList.remove()   来添加或删除一个类

6.使用 document 获取的元素列表无法直接用 foreach 直接循环，需要用 Array.from(元素) 转换成数组

7.使用绝对定位的元素居中 可以使用 left: 50%；margin-left:  **-**元素宽度一半; 来实现

8. p 标签内不能嵌套 div 。内联 = 行内。p div{}  选择器无法选中

		块元素可以包含内联元素或某些块元素，但内联元素却不能包含块元素 只能包含其他的内联元素 

9. 域名解析 --> 发起TCP的3次握手 --> 建立TCP连接后发起http请求 --> 服务器响应http请求，浏览器得到html代码 --> 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 浏览器对页面进行渲染呈现给用户

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

25. this 传递丢失 (新增85)

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

36. ![chrome_devTool](.\img-git\chrome_devTool.png)

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

52. 遮罩的一般写法：

    ```css
    cover{
        position: fixed;
        left: 0;
        top: 0;
        right:0;
        bottom: 0;
        background-color: reba(0,0,0,0.3);S
    }
    ```

53. 判断变量的类型：

    * instanceof

    * typeof

    * 判断是否是数组 Array.isArray()

    * Object.prototype.toString.call(value); // [object 变量类型]

      ```javascript
      Object.prototype.toString.call([])
      "[object Array]"
      Object.prototype.toString.call(5)
      "[object Number]"
      Object.prototype.toString.call('s')
      "[object String]"
      Object.prototype.toString.call(null)
      "[object Null]"
      Object.prototype.toString.call(undefined)
      "[object Undefined]"
      Object.prototype.toString.call(/a/)
      "[object RegExp]"
      Object.prototype.toString.call(Symbol())
      "[object Symbol]"
      Object.prototype.toString.call({})
      "[object Object]"
      Object.prototype.toString.call(Function)
      "[object Function]"
      ```

54. 构造函数中的 this 最好进行判断 this instanceof constructorName ; 当未使用 new 操作符时，函数中的 this 绑定到 window 上。但是在继承时可能会出现问题，在另一个构造函数中用 call 继承会失败。可以用原型链；

55. function 中的 this 的指向问题

    * 全局环境中 this 始终指向 `全局对象` window
    * 在函数内部，`this`的值取决于函数被调用的方式。 

    

    MDN 中关于 this的文档里写到“函数被用作DOM事件处理函数时，它的`this`指向触发事件的元素” 

    ```javascript
    function Person() {
    		this.name = 'tttzy';
    		window.onhashchange = this.reload.bind(this)
        // 不绑定 this 的话，在改变 hash 时会导致 reload 中的 this 指向 window
    }
    
    	Person.prototype.reload = function() {
    		console.log(this)
    	}
    	var s = new Person() 
    ```

56. this 的指向

    函数内部的 this：

    * 简单调用：

      全局中直接调用函数：this 指向全局；

    * bind 方法：

      this `永远` 被绑定在 bind 的第一个参数，无论函数怎么调用；

    * 箭头函数：

      this 与函数外部的语法环境的 this 保持一致(两者相等)；

      ```javascript
      function test() {
      	var that = this;
      	((para)=> {
      		console.log(this === that);	// true
      	})(that);
      }
      test();
      ```

    * 作为对象的方法

      this 指向调用该函数的对象；即使在外部定义函数，由对象调用，依然指向`对象性` ，看出 `this` 的绑定只受最靠近的成员引用的影响。 例如 out.inner.foo() 指向对象inner；

    * 作为构造函数：

      当函数用作构造函数，则 this 被绑定到正在构造的新对象；

      虽然构造器返回的默认值是 `this` 所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象，则返回 `this` 对象）。 

    * 作为一个DOM事件处理函数

      当函数被用作事件处理函数时，它的`this`指向`触发事件的元素`（一些浏览器在使用非`addEventListener`的函数动态添加监听函数时不遵守这个约定）。 

57. 箭头函数会默认忽略掉 call 和 apply 的第一个参数

58. 解构赋值的几种用法：

    * 交换变量：

      ```javascript
      var a=3,b=4;
      [a,b]=[b,a];
      ```

    * 访问数组中元素：如果数组元素为空可以赋默认值

      ```javascript
      var [color="red"] = ['blue','yellow','pink']; // 当第一个数组元素为空，color为默认值red
      ```

    * 任何可迭代对象都可以用结构赋值，

      [迭代协议]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols

      ```javascript
      var arr = [1,2,3,4];
      typeof arr[Symbol.iterator]()	// 'function'
      // 可以自定义的对象添加迭代函数，也能用于解构赋值；
      var obj = {
          [Symbol.iterator]() {
              // 代码
          } 
      }
      ```

59. 对象的属性名可以这么写：

    ```javascript
    var a = 'c';
    console.log({[a]: 'name'});
    // { c: 'name' }
    ```

60. 节流函数用了闭包，外部函数记录timeid，return的内部函数判断timeid，注意要在定义事件外调用节流函数，返回的内部函数在定义的dom事件内调用；（防抖的原理也是一样，清除定时器id），给函数参数添加属性也能做到

61. 根据BFC布局规则第六条：

    计算BFC的高度时，浮动元素也参与计算；所以 overflow：hidden 清除浮动的原理就是创建了一个 BFC ，所以计算了内部的浮动元素

62. 伪元素清除浮动原理：

    clear:

    ​	当应用于非浮动块时，它将非浮动块的[边框边界](https://developer.mozilla.org/en-US/docs/CSS/box_model)移动到所有相关浮动元素[外边界](https://developer.mozilla.org/en-US/docs/CSS/box_model)的下方。这个非浮动块的[垂直外边距](https://developer.mozilla.org/en-US/docs/CSS/margin_collapsing)会折叠。

    ​	当应用于浮动元素时，它将元素的[外边界](https://developer.mozilla.org/en-US/docs/CSS/box_model)移动到所有相关的浮动元素[外边框边界](https://developer.mozilla.org/en-US/docs/CSS/box_model)的下方。  

    ```javascript
    ul {
    	border: 1px solid skyblue;
    }
    
    li {
        border: 1px solid pink;
        width: 100px;
        float: left;
        height: 50px;
        list-style: none;
    }
    div {   /* 模拟伪元素清除浮动原理 */
         width: 100px;
         height: 0px;
         clear: both;	// 将元素移至浮动元素的下方
    }
    ```

63. margin 为负值产生的影响：

    * margin-left/right：-50px；在左边(右边)会超出容器 50px 的大小；
    * top：会将元素上下移动；
    * bottom：无变化，但会使页面中渲染结果读到的实际值为 `padding+content+border-marginBottom` 所以左右自适应高度的父容器高度始终是最高的那个。js 读取的实际高度仍然为 `padding+content+border`
    * 对于绝对定位元素，负margin会基于其绝对定位坐标再偏移， 
    * 对于浮动元素，第一层浮动元素占满一行，下一层浮动元素，如果给 margin-left 的 负值超过自生的宽度，则会到上一行去，覆盖在上一行的元素上

    应用：

    * 多列等高：ivg 导航下拉菜单；
    * 去除每一行最后一个 li 标签的 margin ，以前用的 flex。

64. new Promise() 中的代码属于同步任务，而 .then() 中的任务属于微任务后执行；

    ```javascript
    new Promise((resolve) => {
        console.log('1');
        resolve()
    }).then(resolve => {
        console.log('2');
    })
    console.log('3');
    // 1、3、2
    ```

65. arguments 获取的是调用函数时传入的参数，而不是函数定义时的参数。所以 es6 的默认参数值并不会影响 argument 的值；

66. `Array.from()` 方法从一个`类似数组或可迭代对象`中创建一个新的，`浅拷贝`的数组实例。 

67. `vertical-align` 只对行内元素、表格单元格元素生效：不能用它垂直对齐块级元素。 

68. 通过实例的 `__proto__` 属性可以修改原型的方法，但是直接 obj.attr 是不会改变原型中的属性；

69. 当 `数字`  或 `字符串` 和 `数组` 进行 == 比较，因为数组是一个对象，所以会被进行隐式转换，调用 tostring 转换成字符串。如果和数字进行比较，字符串还会被转换一次；

    ```javascript
    0 == []	// true, [] => '' => 0
    '' == '0'	// false, 字符串之间比较不会再进行转换；
    ```

70. Object.keys(obj) 可以获取对象的属性(//TODO)，返回数组；

71. 伪元素创建的元素不在 DOM 树中

72. 通过 proxy 代理可以在前端解决跨域问题

    配置在 config.js 或者在 webpack.config.js 文件中

    ```javascript
     proxy: {
        '/api': {
          target: 'http://api.tietalocal.com',
          changeOrigin: true,
          pathRewrite: { '^/server': '' },
        },
      },
    ```

73. 前端发送请求会先找 mock 的路径，没有才去服务端的接口

74. 在constructor和componentWillReceiveProps都进行props的赋值，才可以解决props设置state的问题： 

75. 箭头函数不能被用作构造函数；

76. React 中不要去修改 props 属性；

77. es6 的 class 中定义的方法中如果有 this，这个 this 是指向实例的 this，如果需要单独调用这个方法注意要 this 的指向；

    例如：react 的 onClick 方法中要调用含有 this 的方法，

    * 在 constructor 中绑定 this
    * 使用 箭头函数定义方法；

78. 通过 bind 可以传给函数参数，例如 onClick={handleClick.bind(this, params)}

79. 检查相应数据是否属于 state：

    1. 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
    2. 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
    3. 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

80. input 自动填充时有背景颜色，

    ```css
     input:-internal-autofill-selected{
        background-color: #fff;
        background-image: none;
        color: $gray;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: $gray !important;
      }
      input:-webkit-autofill {
        background-color: #fff;
        background-image: none;
        color: $gray;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: $gray !important;
      }
    ```

    

81. 给 td 设置宽度，在浏览器中可能会有几像素的偏差。设置 table 的style， table-layout: fixed

82. this.setState() 在 react **生命周期中调用是异步**的，如果直接用 addEventListener 之类的直接使用 setState 则是**同步**更新 state

    ```javascript
    //  
    this.setState((state) => {
        // 重要：在更新的时候读取 `state`，而不是 `this.state`。
        return {count: state.count + 1}
     });
    ```

    

83. antdesign 坑：getFieldDecorator 包裹 Upload 组件时，第一个 form 的字段名不能和其他组件重复。否则会导致 onChange 不能触发

84. Number(null、空字符串) 返回 0， 而 undefined、NaN等返回 NaN

85. 逗号运算符：对每个操作进行求值，最后返回最右边的值

    ```javascript
    (0, 1) // 返回 1
    (0, 1, 2)	// 返回 2
    
    (0, function(){})()	// 返回 function(){}	注意：这里会发生 this 丢失
    // this传递丢失(传递丢失，见25)
      var a = 'window.a' 
      let o = {
        a: 'o.a',
        getA: function() {
          console.log(this.a)
        }
      }
      (1, o.getA)()	// 输出 window.a	(1, o.getA) 返回了getA函数，之后再调用，this指向window
      (o.getA)()	// 输出 o.a，没有传递这个过程，所以this并未丢失
    
    ```

86. link 标签的一些用法:

    * 通过 href 引入 css 样式，rel 为 stylesheet

    * 通过 href 引入其他资源，rel 为对应的值，例如 引入图标

      ```css
      <link rel="icon" href="favicon.ico">
      ```

    * 还有 media 属性，通过媒体查询，在满足媒体查询的条件时才被加载

    * rel 设置为 preload 表示浏览器需要预加载该资源

    * crossorigin 属性表示该资源是否需要用一个 cors 请求去获取

87. IntersectionObserver 用于观察**目标元素**是否与**父元素**有交叉，常用：懒加载、无限滚动

    ```javascript
    cosnt intersectionObserver = new IntersectionObserver((entries, observer) => {
    	// 监听事件
    }, { // 配置
        root: Element,	// 监听对象的祖先元素
        rootMargin: '22px',	// 距离祖先元素边界多少距离被触发
        threshold: [], 	// 元素在0~1之间，交叉区域与被监听的元素的比率为设定值时触发，
    })
    intersectionObserver.observer(Element)	// 开始监听元素
    intersectionObserver.unobserve(Element)	// 停止监听摸个对象
    intersectionObserver.disconnect()	// 使IntersectionObserver对象停止监听工作。
    ```

    

88. css 许多属性有 inherit 值，可以用来继承父元素的值。例如: a 标签可以把 color 设置为 inherit，直接继承父元素的 color 值。

89. img 属性：

    * object-fit：css 属性，可以控制图片大小，类似 background-size 属性
    * object-position： css 属性，可以控制图片位置，类似 background-position 属性

90. 取整数：

    * Math.ceil()
    * Math.floor()
    * (波浪号)~0.1   输出-1。     计算规则：数值 +1，在取反

91. nodejs 进程守护 // TODO

    由于 Nodejs 是单线程，一旦遇到严重错误退出 Nodejs 进程，导致应用瘫痪。所以需要进程守护帮助重启进程。

    eggjs 提供了 egg-cluster 来守护进程

92. 为什么 React 组件头部都要引入一个 React 对象？

    因为使用了 jsx 语法，jsx 语法转换后就是 React.createElement() 所以必须要有。

    因为需要频繁引入，有提供插件能够自动引入 babel-plugin-react-require

93. filter: drop() 为不规则图形添加阴影

94. 注意发布订阅模式记得在组件销毁时解除绑定

95. visibilitychange 事件，在当前页面标签被切换(隐藏)后或者最小化后触发。注意浏览器的兼容性。通过 document.hidden 属性可以获取当前页面是否隐藏。（主播中心，anchorCenter.vue）

96. git merge 关于三路合并算法：
    三路合并算法是用于解决冲突的一种方式，当产生冲突时，三路合并算法会获取三个节点：本地冲突的B节点，对方分支的C节点，B，C节点的共同最近祖先节点A。三路合并算法会根据这三个节点进行合并。具体过程是，B，C节点和A节点进行比较，如果B，C节点的某个文件和A节点中的相同，那么不产生冲突；如果B或C只有一个和A节点相比发生变化，那么该文件将会采用该变化了的版本；如果B和C和A相比都发生了变化，且变化不相同，那么则需要手动去合并;如果B，C都发生了变化，且变化相同，那么并不产生冲突，会自动采用该变化的版本。最终合并后会产生D节点，D节点有两个父节点，分别为B和C。

97. 流程图工具：yEd    https://www.yworks.com/downloads

98. 关于 checkout 的一些使用：

    * git checkout 分支名；    切换分支

      注意：在 checkout 切换分支时，可能会带有当前分支的修改到切换的分支上。

      1. 1. 当切换到与当前分支记录相同的分支时(两分支的 hash 值相同)，会导致切换分支带着修改。例如：从 master 分支通过 checkout -b 命令新建分支 t1，t1 修改后没有 commit 或者 stash 保存，直接切回 master 分支，会导致 t1 的修改带回 master 分支。
         2. 在某一分支进行修改后，未保存，通过 checkout -b 新建分支，会导致修改带到新建分支。
         3. 当只创建新文件，由于未对该文件建立跟踪，新文件也会在切换时被带到切换的分支。

      建议：在切换分支时，需要查看当前是否有修改，对修改进行提交或者通过 stash 进行保存。不能依靠 git 的检查终止。

    * git checkout -b 分支名；  新建并切换分支

    * git checkout  哈希值；   切换到某一次的提交，此时会进入头指针分离状态，类似于一种沙盒状态，可以做任意修改，而不影响分支。也可以通过新建分支来保存修改。

    * git checkout -- file;    将工作区的文件回退到与暂存区相同，如该文件没有放到暂存区，则回到与版本库相同的状态。

99. 通过 image-mask 将 png 图片作为遮罩，可以减少图片体积。https://www.zhangxinxu.com/wordpress/2020/05/css-mask-compress-png-image/

100. html 自定义元素，类似 vue 中的自定义组件，浏览器解析时不认识该标签，会保留下来。操作该标签和其他普通标签没有区别，也能使用标签选择器，js 也能正常获取 DOM。自定义标签继承于 HTMLUnknownElement 对象。

101. 误区：并不是 height === line-height 使得文字垂直居中。而是行高的特性(垂直居中性)导致的。所以即使去除height 文字也能垂直居中。line-height 可以撑开盒子，而不是文字。

102. 文字添加边框：-webkit-text-stroke：2px color。

103. 背景裁剪：background-clip，属性为 text 时，属性名为 -webkit-background-clip。

     ```css
     background: linear-gradient(white 30%, yellow);
     -webkit-background-clip: text;
     filter: drop-shadow(4px 5px 0px black);
     -webkit-text-stroke: 4px red;	
     ```

104. Chrome inspact调试微信内置浏览器页面：仅限android

     * 微信打开 http://debugx5.qq.com
     * 切换到 **信息** tab，勾选打开TBS内核inspector调试功能
     * 数据线连接手机打开chrome的调试功能（似乎不需要vpn）

105. 事件中的 isTrusted 属性返回一个 Boolean 值，用来表明该事件是否可信任。true 代表由用户的实际操作触发，false 表示由脚本触发。**(不准确，不建议使用)**

106. steps: 将动画分段

     ```css
     animation: bg 6s steps(2, end) forwards;
     @keyframes bg {
         30% { background: pink; }
         60% { background: slateblue; }
     }
     /* 
     例如 0% 40% 60% 100%；属性 steps(2, start)
     执行的阶段为 20% 40% 50% 60% 80% 100% 
     如果属性为 steps(2, end)
     执行的阶段为 0% 20% 40% 50% 60% 80% 
     */
     ```

107. 关于函数参数的默认值: 仅当传入参数为 `undefined` 时才会使用默认值，如果传入 null 则接受到的值依然是 null。

108. width 属性的关键词：

     * min-content: 将解析为这个容器内

       部最大的不可断行元素的宽度（即最宽的单词、图片或具有固定宽度的盒元

       素）

109. margin 和 padding 的百分比值是以 `父元素` 的**宽度**作为解析基准的

110. 关于 错误捕获，promise内部的错误，在外部的try catch不能捕获到，通过设置定时器可以捕获到。异步代码需要用await否则外部的try catch 也不能捕获到(try catch 的同步代码走完了，异步任务还未执行，所以捕获不到异步任务的错误)。

111. 端口号：计算机中每个应用程序都对应着一个端口，为了进行区分，又对每一个端口进行编号，叫做端口号。例如每一个ip对应着一台计算机，可以通过ip寻找到某一台特定的计算机。端口号也是如此，通过端口号可以找到某一个应用。所以端口号不能重复。所以在用 devServer 启动多个服务的时候需要指定不同的端口号。

112. History.pushState(Object, '', url); 向浏览器的历史记录中添加一条，类似于hash路由(#test)，并不会去加载url。history.back() 会返回到上一条记录中。

113. popState事件仅能够监听到 history.back , history.forward, 浏览器前进后退的动作；使用 history.pushState, history.replaceState 是监听不到的。

      vue-router中通过 router.push 方法是不会触发 popState 事件的。那是如何加载组件的？猜测是根据路由的配置文件 router.js 来找打对应的组件。待验证。

114. webpack打包分析工具，webpack-bundle-analyzer   文档:  https://www.npmjs.com/package/webpack-bundle-analyzer

115. 当根目录已安装依赖(test1)的子依赖包(a)版本和根目录下的依赖包(a)版本冲突后，在 package-lock.json 中的 test1 下会添加一个 dependencies 属性，里面包含着 test1 下的子依赖包(a) 的版本。

      https://zhuanlan.zhihu.com/p/128625669

      ![/](/Users/zdwh/Desktop/工作日志/note/img-git/npm依赖包安装图解.jpg)

      npm 安装完后 /项目/node_modules/buffer@^5.4.3 下也会有 node_modules 文件夹包含 base64-js@1.0.2 依赖；并且项目中的 node_modules 中也有 base64-js@^1.0.1 依赖

      TODO: 这时候打包的话 base64 会打包两份？

116. npm 版本前的标记：

      @test@主版本号.次版本号.修订号

      * ～: 只升级修订号
      * ^: 升级次版本号和修订号
      * *: 升级最新版本

117. 模块

      * commonJS: nodejs 的加载规范
        * 模块的导出会被缓存，下次调用通过缓存去取
        * 因为有缓存的cun

118. 直播流协议

      * RTMP：adobe的专用协议，在国内流行度很高，只要带有 flash player 就可以播放该协议直播。但是由于RTMP初次建立连接需要进行复杂的握手过程(底层基于tcp)，首开会带来100ms以上的延迟，直播内容延迟在2-5s。
      * HTTP-FLV： 使用 http 协议流式的传输媒体内容，直播内容延迟在2-5s，打开速度快，由于http没有复杂的状态交互所以从延迟的角度来看要优于RTMP
      * HLS： HTTPLiveStream 由苹果提出的基于HTTP的流媒体传输协议。有一个非常大的优点是：HTML5 可以直接打开播放，不需要安装其他东西。

119. for...in... 循环遍历`键`；  for...of... 循环遍历`值`;

120. 左边宽度固定，右边宽度自适应，且右边包含上下两行文字，超出宽度显示省略号

      ```css
      .parent {
        display: flex;
        width: 200px;
      }
      .left {
        width: 60px;
        height: 60px;
        flex-shark: 0;
        flex-grow: 0;
      }
      .right {
        height: 60px;
        flex: 1;
        overflow: hidden;
        width: 0;
        /* overflow 和 width 二选一即可 */
      }
      
      .ellipsis { /* 加在两行文字div上 */
      	overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap;
      }
      ```

121. addEventListener(name, function, [capture | option])

      在移除监听的时候 capture 参数必须和添加监听的时候一致，否则移除监听失败。captrue 默认为 false 

      https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener
     
122. offsetTop 获取到的是该元素到 offsetParent 元素(position属性为fixed、abslute、relative的父元素，或者最近的table、td、th、body元素)的高度。

123. 获取当前元素距离可视区顶部的高度

      ```javascript
      function getElementViewTop(element) {
          // 获取元素到可视区顶部的高度
          let actualTop = element.offsetTop;
          let current = element.offsetParent;
      
          while (current !== null) {
              actualTop += current.offsetTop;
              current = current.offsetParent;
          }
          // 兼容性处理
          const elementScrollTop = document.scrollingElement.scrollTop;
          return actualTop - elementScrollTop;
      }
      
      // document.body.scrollTop、document.documentElement.scrollTop
      // 上面两个分别对应移动端、pc端，
      ```

124. 向 .gitignore 添加新文件

      ```bash
      git rm -r --cached . // 删除缓存
      git add .
      git commit -m 'update .gitignor
      ```

125. 文字方向设置

      ```css
      /** 控制文字显示方向(阅读的顺序)，例如可以从右往左等等 **/    
      direction: rtl;
      unicode-bidi: bidi-override; /* 换成embed属性可以使得文字右边对齐 */
      ```

      ![](/Users/zdwh/Desktop/工作日志/note/css效果图/文字展示方向.jpeg) 
     
126. vue 组件内部执行顺序

      props => methods => data => computed => watch

      详情见：https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L45-L53 中的 `initState` 方法

127. `npm run` 这个命令会将当前文件夹下 `node_modules/.bin` 目录下的所有脚本添加到 `PATH` 路径中，所以在 script 中可以直接使用 脚本名 进行调用。执行结束后再将 `PATH` 恢复原样。 

      例如 .bin 目录下有个 wanwu 脚本，可以在 script 中直接写 `wanwu xxx` 进行使用。 

128. querySelector 如果找不到对应的 DOM 节点，则会抛出错误，影响 js 的运行。通过 getElementBy*** 这种 api 在获取不到元素的时候不会抛出错误，容错性更好。所以可以优先使用。

129. css 属性：offset-path 实现不规则运动动画。兼容性较差

130. pc 线上代理到本地：

      1. 修改 host 文件， mac上用了 ihost。 

         ```bash
         # host
         127.0.0.1  h5.wanwudezhi.com
         #将线上链接代理到了本地
         ```

         假设这时候 mall-web 运行在 8080 端口

         此时直接访问 h5.wanwudezhi.com:8080 即可访问

      2. 通过 nginx 代理多个本地项目

         ```nginx
         server {
                 listen       8888;
                 server_name  localhost;
                 location /mall-web/ {
                     proxy_pass http://10.10.57.1:8080;
                 }
                 location /live-web/ {
                     proxy_pass http://10.10.57.1:10001;
                 }
                 location /base-mall/ {
                     proxy_pass http://10.10.57.1:10001;
                 }
                 location /micro-live-web/ {
                     proxy_pass http://10.10.57.1:10001;
                 }
                 location / {
                     proxy_pass http://10.10.57.1:8080;
                 }
             }
         ```

         访问 h5.wanwudezhi.com:8888 nginx 解析path代理到不同的本地项目
         
      3. 关于 node_modules 下的 .bin 文件，这个文件夹下的文件都是软链，这些文件在 package 的 script 中调用不需要加文件名(node_modules/xxx)，node 会自动在运行时加上  





# 

**问题** （未解决）

2.JavaScript 单线程和事件循环，异步	259  268

看下 es6 中的 class extends 的实现。

简历模板制作

1. 左边菜单；增加新的；
2.  