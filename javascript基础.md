1. **js 基础：5种基本数据类型和1中复杂数据类型；**

- typeof 检测一个未声明的变量返回 undefined；
- null 被认为是一个空的对象的引用，所以 typeof 返回值为 Object；
- undefined 值派生于 null，所以使用 == 判断时返回 true；
- 浮点数会因为舍入导致数值不准确，所以不要测试某个特定浮点数的数值；![image.png](https://static.dingtalk.com/media/lALPDeC2uRCHlg1AzKM_163_64.png_879x10000.jpg)
- 当数值大小超过javascript的数值范围，会自动转化为 ±Infinity，Infinity 无法参加运算；
- 任何涉及到 NaN 的运算都返回 NaN；NaN 不等于任何值包括自身；字符串一旦创建就无法改变；
- 在非数值的值前使用一元操作符(正负号)会对这个值进行转换，![image.png](https://static.dingtalk.com/media/lALPDeC2uRCFurTMplU_85_166.png_879x10000.jpg)
- 对 null、NaN、undefined 使用 ！操作符，返回 true
- 对象在用 `==` 进行比较时会调用 toString、valueOf() 等方法进行转换，再进行比较；



2. **javascript基础：操作符和语句**

- 使用关系操作符时，如果一个操作符是数值，则会将另一个操作数转换为数值进行比较；

- 使用相等操作符，会进行强制转型；

- 函数调用时传入的参数个数没有限制，即使定义函数时只接受几个参数；

- 函数的参数可以由函数体内的 arguments 对象来访问参数数组(箭头函数中没有该对象，使用了 rest 代替)；

- arguments 的值永远与对应命名参数的值保持同步，例：参数 num 对应 arguments[0] ，修改 arguments[0] 的值会使 num 的值同步改变，但是修改 num 的值不会改 arguments[0] 的值，它们的内存空间是独立的。

- ECMAScript 中的所有参数传递都是值，不可能通过引用传递参数；(有点迷)

  理解：

  - 值传递：对于简单类型来说，将变量的值传递给参数，参数的改变不会对原变量的值产生变化。对于对象来说，则是把对象的引用传递给参数（类似把一个对象赋值给另一个变量），操作参数的内部属性会对原对象产生影响，但如果重新给参数赋值则对原对象没影响。
  - 引用传递：将变量的地址传递给参数，操作参数相当于操作变量。对参数的任何操作都会改变变量。

3. **javascript基础：执行环境及作用域链，引用类型；**

   - 执行环境(execution context 简称EC)

     - 执行环境一共有三种全局和局部(函数)作用域，还有一种 eval 环境，但因为其性能问题和安全问题不推荐使用；
     - 执行环境定义了变量或函数有权访问的其他数据，决定了他们各自的行为。每个执行环境都有一个与之关联的变量对象；
     - ECMAScript 所在宿主环境不同，执行环境也不同。在 Web 浏览器中全局执行环境中的变量对象为 window；
     - 执行环境中的代码执行完，该环境会被销毁，其中的变量和函数定义也会被销毁；

   - 作用域链

     - 执行作用域中对变量和函数访问的顺序：当前环境->上一级环境->...->全局环境。作用域链的前端永远是当前执行环境，全局环境永远在末尾；
     - 延长作用域链：某些语句会在当前作用域链前临时新增一个变量对象；

   - 当一个函数被调用时，一个新的上下文(EC)就会被创建，上下文的周期可以分为两个阶段：（参考：<https://www.cnblogs.com/lsgxeva/p/7976034.html> ）

     - 创建阶段：

       ![EC执行阶段 ](C:\Users\tzy\Desktop\note\img-git\EC创建阶段.png)

       在这个阶段，EC会创建执行对象(VO,  variable object)、作用域链和确定 this 指向；

       - 创建执行对象的过程：
         1. 建立 arguments 对象，检查当前上下文中的参数，建立该对象下的属性与属性值；
         2. 检查当前上下文中的函数声明，在变量对象中一函数名建立一个属性，属性值为指向该函数所在内存地址的引用。如果函数名重复，则会被新的引用覆盖；
         3. 检查当前上下文中的变量声明，在变量对象中以变量名建立一个属性，值为 undefined（变量提升的原因）。`如果变量名已存在则跳过，无论值是什么`；

     - 执行阶段：

       创建完成后就开始执行代码，这时会完成变量赋值，函数引用和执行其他代码；![EC创建阶段](C:\Users\tzy\Desktop\note\img-git\EC执行阶段.png)注：变量 n 在函数 inner 之前声明但 inner 在前，可以看出函数的优先级高

     - 执行完毕后出栈，等待被回收

   - javascript 中没有块级作用域；

   - 垃圾收集：

     - javascript 具有自动垃圾收集机制；
     - 两种垃圾收集方式：标记清除和引用计数；
     - 解除引用：对不再使用的数据，将其设为 null；

     

4. 引用类型：

   - object 对象：

     - 通过对象字面量定义对象的时候，不会调用 Object 构造函数；    
     - 访问对象属性的两种方式：obj.name; obj['name']; 一般使用点表示法；

   - Array 类型：

     - 创建数组的三种方式：let arr = [];  let arr2 = new Array();  let arr3 = Array();  
     - 数组有一个 length 属性，用来记录数组元素个数。length 属性可以修改，用来删除末尾项或新加项；
     - 栈方法：
       - push()接受任意数量参数，并逐一加入数组末尾； 
       - pop() 移除数组最后一项；
     - 队列方法：
       - shift() 移除数组第一项，并返回该值；
       - unshift() 接受任意数量参数，并逐一加入数组前端返回新数组长度；
     - 重排序方法：
       - sort() 调用每一项的 toString() 方法，然后比较字符串。可以传入比较函数作为参数，函数接收两个参数，如果参数1在参数2前面函数返回负数，两个参数相等返回0，参数1在参数2后面返回正数；
     - 操作方法：
       - concat() 基于原数组创建一个新数组，参数会作为新项添加到新数组的末尾；
       - slice() 获取数组的一部分，传入一个参数，则选取参数指定位置开始到数组末尾的所有项。传入两个参数，则选取参数1指定位置开始到参数2位置(不包括该位置的项)之间的所有项；
       - splice(参数1, 参数2, 参数3)  参数1 指定位置，参数2指定从参数1开始要删除几项，参数3传入新的项；
     - 位置方法：
       - indexof(参数1, 参数2) 参数1指定要找的项，参数2指定从哪个位置开始。indexof 内部比较时使用全等操作符；
       - lastIndexof(参数1, 参数2)  作用同上，只是查找方向是从数组尾部开始；
     - 迭代方法：
       - every()：对数组每一项运行传入的函数，如果该函数对每一项都返回 true，则返回 true；
       - filter()：对数组每一项运行传入的函数，返回 true 项组成的数组；
       - forEach()：对数组每一项运行传入的函数，没有返回值；
       - map()：对数组每一项运行传入的函数，返回每次函数调用的结果组成的数组；
       - some()：对数组每一项运行传入的函数，如果该函数对任意一项返回 true，则返回 true；
     - 缩小方法:
       - reduce()：函数接收4个值，前一个值，当前值，项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。
       - reduceRight()：作用同上，方向从数组尾部开始

   - Date 类型：

     - `var date = new Date()`
     - 原型方法：
       1. Date.parse()	接受一个表示日期的字符串作为参数，返回毫秒数。(从1970年1月1日0时到今)
       2. Date.UTC(年, 月(从0开始), 日, 时, 分, 秒, 毫秒) 前两个参数必须要，也返回毫秒数；
       3. Date.now() 获取当前时间，返回毫秒数；
     - 日期/时间组件方法：详见《javascript高级程序设计》5.3.3

   - 正则表达式：

     - 创建正则表达式：
       - var pattern = /正则表达式/标志
       - var pattern = new RegExp('正则表达式', '标志')    注意：参数1 是一个字符串，注意各种元字符的转义；参数2也是一个字符串；

   - Function 类型：

     - 定义函数：

       - 函数声明：

         `functiondeclaration(){}`

       - 函数表达式：    

         `varexpression = function(){}`

         二者作用相同，但是函数声明，只要定义了函数，在代码的任何位置都可以使用；表达式只有执行到赋值语句后才可以使用；

       - 使用 Function 构造函数：

         ```var constructor    = new Function(参数1, 参数2, ... , '函数体')```

         不推荐使用；

     - js 的函数没有重载：

       函数名相当于一个变量，重复定义函数则是后面的函数覆盖了前面函数，变量的引用被改变了(函数的实质也是对象)；

     - 函数的内部属性：

       - arguments：

         1. 包含着所有传入函数的参数；
         2. 有一个 callee 属性，该属性是一个指针，指向拥有这个 arguments 对象的函数；

       - this：

         this 指向调用该函数的环境对象；

       - caller：

         保存着调用当前函数的函数的引用(函数在全局中被引用则值为 null)；

     - 函数的属性和方法：

       1. length：保存着函数希望接收到的属性个数(定义函数时的参数个数);
       2. prototype：指向函数的原型，该属性不可枚举，因此无法用 for...in... 获取到；
       3. apply()：用于绑定特定的 this， 接受一个数组作为调用函数的参数；
       4. call()：作用同上，除了第一个参数，其余都作为调用函数的参数；

5. 基本包装类型

   `为了方便基本类型的操作`，ECMAScript 提供了 3 个特殊的引用类型：Boolean、Number 和 String。

   每次读取基本类型值的时候，后台都会创建一个对应的基本包装类型的对象。因此可以调用一些方法来操作数据。例：'string'.length 执行时会创建一个 String 的基本包装类型，所以可以调用属性或方法。

   在读取模式中访问字符串，后台自动完成下列操作：

   1. 创建 String 类型的一个实例；

   2. 在实例上调用指定的方法；

   3. 销毁这个实例；

      ```javascript
      // 类似执行这样的操作
      var s1 = new String('str');
      var s2 = s1.substring(2);
      s1 = null;
      ```

      实例执行完就直接销毁，所以无法直接访问；

   * Boolean 类型：

     传入的所有对象都会被转为 true；

     基本类型和引用类型的布尔值的不同：

     ```javascript
     false instanceof Boolean	// false
     new Boolean(false) instanceof Boolean	// true
     ```

   * Number 类型：

     方法：

     * .toFixed() 返回指定的小数位数的数值`字符串`；
     * .toExponential() 返回以指数表示法表示的数值`字符串`；

   * String 类型：

     * 用于访问字符串中特定位置的字符方法：

       * charAt() 返回指定位置的字符；
       * charCodeAt() 返回指定位置的字符的编码；

     * 字符串操作方法：

       * concat() 传入任意参数，拼接成一个字符串；

       * slice() 第一个参数指定开始位置，第二个参数指定结束位置（不包括），返回子串；

       * substr() 第一个参数指定开始位置，第二个参数指定多少个字符，返回子串；

       * substring() 作用同 slice();

         区别：

         在传入负值的时候, slice() 会把值与字符串的长度相加；substr() 将第一个参数加上字符串长度，而第二个值则变为0；substring() 直接把所有参数都转化为0；

     * 字符串位置：

       * indexOf() 返回子串在字符串中的位置，第二个参数指定从字符串的那个位置开始找；
       * lastIndexOf() 作用同上，但寻找位置从字符串尾部开始；

     * trim()：删除字符串`前后`的空格，字符串中间的空格保留；

     * 大小写转换：

       * toLowerCase()、toLocaleLowerCase(): 转小写；
       * toUpperCase()、toLocaleUpperCase(): 转大写；

     * 字符串的模式匹配：

       * match()  第一个参数传入`RegExp对象`或`正则表达式`，返回一个数组；
       * replace() 第一个参数传入`字符串` 或 `正则表达式` 或 `RegExp` 对象，第二个参数传入替换的字符串或`函数，`替换字符串中对应的字符。传入的函数接收了三个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串。

   * 单体内置对象

     * Global：

       最底层的一个对象，无法通过代码访问，所有在全局作用域中定义的属性和函数都是 Global 的属性和方法；

       * URI编码：

         encodeURI() 编码；

         decodeURI() 解码；

       * eval()：

         将字符串作为代码运行；因为安全性(代码注入)，不推荐使用；

       	​	

     * Math：

       提供了一些数学公式和信息；

       常用方法：

       * Math.min() 返回一组数的最小值；

       * Math.max() 返回一组数的最大值；

         ```javascript
         // 通过 apply 可以传入数组
         Math.max.apply(null, [1,2,3])
         // 或者用展开语法
         Math.max(...[1,2,3])
         ```

       * 舍入
         * Math.ceil() 向上取整；
         * Math.floor() 向下取整；
         * Math.round() 四舍五入取整；

       * random() 返回一个介于 0 和 1 之间的一个随机数，不包括 0 和 1

       * Math.abs() 返回绝对值

       * Math.sqrt() 返回平方根

6. 面向对象的程序设计：

   * 两种简单的创建对象的方式：

     * 创建一个 Object 的实例，为其添加方法和属性；
     * 字面量的方式；

   * ECMAScript 中的两种属性：

     * 数据属性：

       数据属性中包含一个数据值的位置。可以写入和读取值。数据属性中有四种描述(描述符)其行为的特性；

       * [[Configurable]]：表示能否通过 delete 删除属性从而从新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为 true；
       * [[Enumerable]]：表示能否通过 for-in 循环返回属性，默认值为 true；
       * [[Writable]]：表示是否能够修改属性值，默认值为 true；
       * [[Value]]：包含这个属性的数据值，默认值为 undefined。

       修改属性默认特性使用 Object.defineProperty() 方法，接受三个参数：属性所在的对象，属性名和一个描述符对象(详见 javascript 高级程序设计 p139 最后)。

     * 访问器属性：

       访问器属性不包含数据值；通过 getter 或 setter 函数返回或设置值

       - [[Configurable]]：表示能否通过 delete 删除属性从而从新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为 true；

       - [[Enumerable]]：表示能否通过 for-in 循环返回属性，默认值为 true；

       - [[Get]]：在读取属性时调用的函数，默认值 undefined；

       - [[Setter]]：在写入属性时调用的函数，默认值 undefined；

         ```javascript
         var person = {
             _name: 'tttzy',	// 下划线只是一种记号，用于表示只能用对象方法访问的属性。
             age: 55
         }
         Object.defineProperty(person,'name',{
             get: function() {
             	return this._name
         	},
             set: function(value) {
                 if(value === 'tttzy2') {
                     this._name = value;
                     this.age = 66;
                 }          
             }
         })
         person.name = 'tttzy2'
         console.log(person.age) // 66
         // 通过 set 设置 name 属性时同时改变了 age 属性。
         ```

       Object .defineProperties() ：一次性定义多个属性。

       Object.getOwnPropertyDescriptor()：获取给定属性的描述符；

7. 创建对象

   * 工厂模式：

     因为在 javascript 中无法创建类(es6 中引入 class 关键字)，所以创造了一种函数封装特定接口创建对象的细节；多次调用该函数并接受返回值就能解决创建多个相似对象。但是无法判断对象的类型；

   * 构造函数模式：

     * 自定义属性和方法，使用 new 操作符创建对象；构造函数的名字首字母要大写；
     * new 操作符创建对象会经历下面 4 个过程：
       1. 创建一个新对象；
       2. 将构造函数的作用域赋给新对象；
       3. 执行构造函数中的代码（添加属性和方法）；
       4. 返回新对象；(当构造函数中有用 this 添加属性或方法则返回一个对象并指向该构造函数的实例；如果没有 this，且构造函数的返回值不是一个对象，则返回一个空对象；如果构造函数返回一个对象，且没有 this，则 new 返回构造函数的返回值)

     * 构造函数也是一个函数，与其他函数的不同点在于调用的方式不同；`任何函数`也能当做构造函数使用；当构造函数不使用 new 创建对象，则返回 undefined(函数不指定 return，默认返回 undefined)；

   * 原型模式：

     * 每一个构造函数都有一个 prototype 指针，指向原型对象；
     * 构造函数的 prototype 与实例对象的 \__proto__ 指向相同；
     * 原型中可以存储属性或方法，所有实例都可以访问，但是在实例中不能重写原型中的属性和方法；
     * 当使用某个属性或方法时，都会先从实例开始搜索该属性或方法，没找到则继续找它的原型中是否存在该属性或方法，直到原型链结束；
     * 如果实例和原型中有同名属性，则实例中的属性会屏蔽原型中的属性，只能访问原型中的属性。
     * hasOwnProperty() 检测一个属性存在于实例中还是原型中，实例中则返回 true；
     * in 操作符可以确定一个属性是否在对象及其原型中；和 hasOwnProperty 方法结合则能判断一个属性在原型中还是对象中；
     * for-in 循环。返回所有能够通过对象访问的、可枚举的属性（包括原型中的属性）；
     * Object.keys() 可以取得对象中所有可枚举的`实例`属性；
     * Object.getOwnPropertyNames()  可以获取所有`实例属性`；

   * 组合使用构造函数模式和原型模式(最常用的一种方式)：

     * 优点：
       1. 每个实例都有一份自己的实例属性副本；
       2. 共享原型中的属性；
       3. 支持向构造函数传递参数；

   * 动态原型模式：

     将所有信息都封装在了构造函数中，必要时在狗在函数中初始化原型；

   * 寄生构造函数模式：

     创建一个函数，仅用来封装创建对象的代码，函数中返回对象；使用 new 操作符创建对象；

8. 继承：

   许多OO语言(Object Oriented)两种继承方式：`接口继承`(如 java 中的 interface)和`实现继承`；

   接口继承只继承方法签名(参数及其类型，返回值及其类型)，实现继承则继承实际的方法；

   由于 javascript 中的函数没有签名，所及无法实现接口继承，只支持实现继承；而实现继承则靠原型链来实现；

   * 原型链

     由于对象读取属性的特性(会在原型链上寻找属性或方法)，所以可以用来作为实现继承的方法；`实现的本质就是重写原型对象`: 使一个构造函数的原型指向需要继承的原型的实例；

     使用 `instanceof` 来测试实例与原型之间的关系；

     **注意** 给原型添加方法一定要在替换原型之后；实现继承后不要在用字面量的方式创建原型方法；

     ```javascript
     function Person() {
     		this.name = 'Person'
     }
     function Student() {
     	this.name = 'student';
     }
     Student.prototype = new Person()
     Student.prototype = {	// 会重写原型
     	age: 55,
     	action(){}
     }
     ```

     缺点：无法向 Person 中传递参数(一旦传递参数会影响所有 Student 实例);

   * 借用构造函数：

     在构造函数中使用 apply 或 call 方法：

     ```javascript
     function Person() {
     	this.name = 'Person'
     }
     function Student() {
     	Person.call(this)
     }
     ```

     优点：可以传递参数且不影响实例的属性；

     缺点：函数无法复用；

   * 组合继承：

     将原型链和借用构造函数方法组合使用；

9. 函数表达式

   * 函数声明

     ```javascript
     // 第一种
     function first() {}	// 函数声明式
     // 第二种
     var second = function(){}	// 函数表达式
     //第三种
     function() {} // 匿名函数，也称拉姆达函数
     ```

     * 通过 functionName.name() 可以获取函数的名字，匿名函数返回空字符串。
     * 使用 函数声明式声明函数，可以在代码的任意位置调用；使用函数表达式，则需要在复制后才能使用；

   * 递归

     递归函数实在一个函数通过名字调用自身的情况下构成的。

     ```javascript
     // 累加
     function accumulation(n) {
         if(n <= 1) {
             return 1;
         } else {
             return n + accumulation(n-1);
             // 上述方法有缺陷，建议 return n + arguments.callee(n-1);
         }
     }   
     ```

   * 闭包

     闭包指的是有权访问另一个函数作用域中的变量的函数。

     ```javascript
     function outside(val) {
         function inside() {
             console.log(val)	// 访问了 outside 中的 val 变量，形成一个闭包
         };
         inside();
     };
     ```

     * 关于 this 对象

       this 对象是在运行时基于函数的执行环境绑定的：全局函数中，this 等于 window；被对象调用时，this 指向对象。

       匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window。

   * 模仿块级作用域

     因为 javascript 中没有块级作用域的概念而带来一些问题，所以用匿名函数来模仿块级作用域来避免问题。

     ```javascript
     (function () {
         // 块级作用域 
     })()
     ```

# BOM

1. window 对象

   在浏览器中，window 对象有双重角色，即使通过 JavaScript 访问浏览器窗口的一个接口，有事 ECMAScript 规定的 Global 对象。

   在全局作用域中声明的所有变量和方法都会变成 window 对象的属性和方法。

   ```javascript
   var name = 'tttzy';
   console.log(window.name) // tttzy
   ```

   全局变量不能通过 delete 删除，而通过 window 定义的属性可以通过 delete 删除。

2. location 对象

   location 对象提供了与当前窗口加载的文档有关的信息，还有一些导航功能。window.location 和 document.location 引用的是同一个对象。

3. navigation 对象

   识别客户端浏览器的事实标准。navigation 对象的属性通常用于检测显示网页的浏览器类型。

4. screen 对象

   基本上只是用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息，如像素宽度和高度等

5. history 对象

   保存着用户上网的历史信息，从窗口被打开的那一刻起。

   方法：

   * history.go()  参数传入一个整数，正数代表向前跳 n 步，负数代表向后跳 n 步。
   * history.forward() 向前
   *  history.back() 向后

# 客户端检测

因为不同的浏览器自带的功能不同







1. 事件委托：

给父元素添加点击事件，通过 e.target 给获取点击的子元素添加事件：

```javascript
<ul id="list">
		<li>1</li>
</ul>
<input type="button" value="click" id='btn'>

<script>
	var ul = document.querySelector('#list')
	document.querySelector('#btn').addEventListener('click', function() {
		var li = document.createElement('li');
		li.innerText = Math.random();
		ul.appendChild(li)
	});
	document.querySelector('#list').addEventListener('click', function(e) {
		console.log(e.target.innerText)	// 即使新添加的li标签也有事件
        // 可以用 switch case 判断
	});
</script>
```

优点：

* 每个函数都是对象，会大量占用内存。事件委托可以减少内存占用，提高性能；
* 新增的子元素不必再添加事件。

2. 错误处理：

   try catch 语句捕捉和处理错误；

   throw 抛出错误；

   js 是弱类型语言，所以对变量进行检查不仅仅检查变量是否为空，同时要检查变量的类型；



## 窗口 //TODO

 









