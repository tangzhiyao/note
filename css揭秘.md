1. currentColor 也是颜色值的一种，比如：skyblue、red等等。只不过该值会被解析成当前color的值。

2. 在写css的时候也需要注意将一些重复的公共的样式，属性抽离出来，使得代码更加干净，维护也方便。

   ```css
   /* 重复写法 */
   background: url(tr.png) no-repeat top right / 2em 2em,
   url(br.png) no-repeat bottom right / 2em 2em,
   url(bl.png) no-repeat bottom left / 2em 2em;
   
   /* 抽离后 */
   background:  url(tr.png) top right,
    			url(br.png) bottom right,
    			url(bl.png) bottom left;
   background-size: 2em 2em;
   background-repeat: no-repeat;
   ```

3. css提供了变量，与预处理器中的变量不同，css原生提供的变量是**动态**的，且能够通过 js 去访问修改。

   ```css
   
   .parent{
       /*声明 --color 变量*/
       --color: red
   }
   .child {
       /* 使用 --color变量 */
       background-color: var(--color);
   }
   ```

   [阮一峰 css 变量](http://www.ruanyifeng.com/blog/2017/05/css-variables.html) 

4. 多边框的实现：

   * box-shadow，用逗号分隔设置多个阴影，阴影的模糊值设为0, 不同的边框设置不同的扩张半径即可。**注意**：外阴影部分，不能触发元素相应的事件，可以使用内阴影(inset)代替。
   * outline：使用类似 border，也只能有一条，可以 border 一起使用。**注意**：outline 不会贴合圆角

5. 元素中都有三个矩形框：border-box(边框)、padding-box(内边距)、content-box(内容)。background-position和background-origin的默认值都是基于padding-box外边框来进行定位的。

6. 内边框效果

   ```css
   .box {
   		width: 100px;
   		height: 100px;
   		background-color: grey;
   		border-radius: 20px;
   		outline: 1px dashed white;
   		outline-offset: -5px;
   	}
   ```

   ![内边框](C:\Users\tzy\Desktop\note\css效果图\内边框效果.png)

7. 十字形

   ```css
   .box {
       width: 100px;
       height: 100px;
       outline: 50px solid black;
       outline-offset: -92px;
       background: aliceblue;
   }
   ```

   ![](C:\Users\tzy\Desktop\note\css效果图\十字形.png)

8. 图片做文字背景

   ```html
   <div class="box">asdfasdzxcvxcvewrsadsadfasdfasasdfasdzxcvxcvewrsadsadfasdfasdzxcvxcvewrsadsadfasdfasdzxcvxcvewrsadsadf</div>
   ```

   ```css
   .box {
       width: 200px;
       height: 300px;
       line-height: 15px;
       background-image: url(http://placekitten.com/200/300);
       color: transparent;
       font-size: 47px;	/*为了更好展示效果，放大加粗了字体*/
       font-weight: 900;
       word-break: break-all;
       -webkit-background-clip: text;
   }
   ```

   ![](C:\Users\tzy\Desktop\note\css效果图\图片做文字背景.png)

9. 斜条纹

   原理：通过线性渐变两种颜色的位置都设置为相同(渐变色百分比设置为相同后就没有中间过渡的效果，而是突变。最终的结果就是两个纯色)和渐变角度设置为45度，再通过 backgroun-size 缩小背景，并重复背景得到(重复显示红框的内容)。

   其他应用：三角形纹理 ...

   ```css
   .box {
       width: 100px;
       height: 100px;
       background: linear-gradient(45deg, skyblue 25%, pink 0, pink 50%, skyblue 0, skyblue 75%, pink 0);
       background-size: 25% 25%;
   }
   
   /*第二种*/
   /*repeating-linear-gradient 循环渐变色*/
   .box {
   	width: 100px;
       height: 100px;
       background: repeating-linear-gradient(45deg, skyblue , skyblue 15px, pink 0, pink 30px);
   }
   /*
   * 百分比 | px 的意思？为什么这么设置就是纯色
   * 我的理解 0-15px 为 skyblue； 15-30px 为 pink	所以中间就不存在过渡(pink 0，小于前面 slyblue 15，所以默认等于前面的 15px)。
   * 如果把 pink 0 设置为 pink 20px 那么会在 15px ~ 20px 之间产生 skyblue ~ pink 的过渡 
   * 		
   */
   ```

   ![](C:\Users\tzy\Desktop\note\css效果图\斜条纹.png)

10. 

    