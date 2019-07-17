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

**问题** （未解决）

1.instanceof 和 typeof 

2.JavaScript 单线程和事件循环，异步