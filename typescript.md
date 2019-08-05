# TypeScript

文件名后缀为 .ts

指令为 tsc

1. 指定变量类型

   ​	typescript 中用 `:` 指定变量的类型，

   

 ```javascript
let name: string = 'tttzy'	
let age : number = 22 	
// typescript 只会进行静态检查，如果错误，编译时就会报错，但依然会生成 js 文件

/**** void ****/
function printName(): void {	// 表示函数没有返回值
    console.log(name)
} 
let unusable: void = undefined; // 此时只能赋值为 undefined 和 null


/**** null & undefined ****/
// null 和 undefined 也能用来定义
let u: undefined = undefined;
let n: null = null;
// null 和 undefined 是所有类型的子类型，所以可以赋值给其他类型
// 但 void 不可以这么用
let age: number = null;	// 不会报错


/**** any 类型 ****/
// any 可以使用任意值
// 声明变量不指定类型且不赋值,则默认为 any
let anyThing: any = 55;
let anyThing2;


/**** 类型推断 ****/
let judge = 'tttzy'
// 等同于
let judge: string = 'tttzy'


/**** 联合类型 ****/
let myNumber: string | number;  // myNumber 可以是 string 或 number 类型
// 使用 | 分隔每种类型
// 只能使用两种类型共有的方法。 如：.toString() 方法可以使用； 如果用 .length() 则会报错
// 当变量被赋值时会进行 类型推断；
 ```


2. 对象的类型 --- 接口

   使用 interfaces 来定义对象的类型

   ```javascript
   interface Person {
       name: string,	// 确定属性
       age: number,
       sex?: string 	// 可选属性
   }
   let tom: Person = {
       name: 'tttzy',
       age: 22,
   }
   // 属性的类型必须与接口中的一致；
   // 属性个数不能多也不能少（除了可选属性）；
   ```

   