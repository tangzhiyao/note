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

   ![内边框](..\note\css效果图\内边框效果.png)

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

   ![](..\note\css效果图\十字形.png)

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
       font-size: 47px; /*为了更好展示效果，放大加粗了字体*/
       font-weight: 900;
       word-break: break-all;
       -webkit-background-clip: text;
   }
   ```

   ![](..\note\css效果图\图片做文字背景.png)

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
   * 我的理解 0-15px 为 skyblue； 15-30px 为 pink 所以中间就不存在过渡(pink 0，小于前面 slyblue 15，所以默认等于前面的 15px)。
   * 如果把 pink 0 设置为 pink 20px 那么会在 15px ~ 20px 之间产生 skyblue ~ pink 的过渡 
   *   
   */
   ```

   ![](..\note\css效果图\斜条纹.png)

10. 单个元素实现图片当做边框。

    ```css
    #test {
        width: 200px;
        height: 200px;
    
        border: 30px solid transparent;
        background: linear-gradient(white, white),
        url(http://placekitten.com/200/300);
        background-clip: padding-box, border-box;
        /*
        * 由于背景图片是以padding的左上角开始铺的，所以如果不加后两个属性，会导致边框有奇怪的拼接效果。
        * 所以设置 origin 属性，使得背景以边框的左上角开始平铺，并且大小充满元素。
        */
        background-origin: border-box;
        background-size: cover;
    }
    ```

    ![](..\note\css效果图\图片边框.png)

11. 其他方式实现虚线边框

    ```css
    #test {
        width: 200px;
        height: 200px;
        border: 1px solid transparent;
        background: linear-gradient(white, white) padding-box,
        repeating-linear-gradient(45deg, black, black 10px, white 10px, white 20px);
        /**animation: ants 12s linear infinite;**/
    }
    @keyframes ants { to { background-position: 200px } }
    
    /**
     * 如果添加上动画，可以实现 ps 中的选择框的动态效果
     * 这种方式可以定义虚线的大小，宽度，间隔宽度。 
     */
    ```

    ![](..\note\css效果图\背景实现虚线边框.png)

12. border-radius:

    一般常用的是直接给一个值，产生圆角的效果。

    第二种是给多个值，分别去设置每个角的弧度。

    第三种是两个值之间用 `/` 分隔，可以设置水平和垂直半径。（实现椭圆）

13. 实现梯形

    1. 矩形的两边添加三角形伪元素实现。
    2. 将矩形元素绕x轴旋转，通过透视可以实现梯形。并且能够实现圆角。

    ```css
    .trapezoid {
      transform: perspective(5px) rotate(5deg)
    }
    ```

    ![](..\note\css效果图\透视梯形.png)

14. 实现180度以内的双色饼图

    实现思路：使用一个div作为圆形底图，背景色设置为双色(渐变实现，粉色作为占比。粉色区域也可以用伪元素覆盖实现)，创建一个矩形伪元素(高为底图的直径，宽为直径的一半，颜色和背景相同)覆盖在底图的一边(超出圆形的区域，通过overflow隐藏)，给矩形伪元素的旋转基点设置为左边框中心，旋转矩形实现饼图。

    * 大于180度，需要将矩形的颜色变换为粉色

    ![](..\note\css效果图\180饼图.png)

15. 列表实现斑马纹

    * 通过 nth-child 选择器实现
    * 通过 渐变色背景实现

16. 投影

    * box-shadow: 水平位置  垂直位置  模糊半径  阴影大小  颜色  内阴影,

      水平位置2  垂直位置2  模糊半径2  阴影大小2  颜色2  内阴影2,

      ...;

      可以同时添加多个阴影

    * 不规则投影

      通过box-shadow虽然能够展示阴影，但仅作用在当前元素上。如果像带小三角形的气泡框这种不规则图片，使用该属性生成的阴影并不会包含这些。

      好在还有其他的解决办法，通过滤镜中的 drop-shadow() 函数即可轻松实现，接受的参数也同 box-shadow，只是没有内阴影(inset)关键词。也不能添加多个。

17. 改变图片颜色

    * 最简单的一种，可以通过添加一层带颜色的透明层覆盖在图片上。虽然能够改变视觉的颜色，但是削弱了图片的对比度。

    * 通过滤镜(filter)实现，例如 sepia 函数可以降低图片饱和度的橙黄色染色效果。通过多种滤镜组合可以实现各种染色效果。并且这些滤镜也能够添加

      在一些祭奠活动中，经常有要求需要网站主色调呈灰色。此时可以使用 filter: grayscale(1) 实现。仅一行代码添加中body标签中即可完成。

18.

15. 通过角向渐变实现饼图

    ```CSS
    .demo {
        width: 100px; height: 100px;
        border-radius: 50%;
        background: conic-gradient(#655 40%, yellowgreen 0);
    }
    ```

    ![](..\note\css效果图\角向渐变饼图.png)
