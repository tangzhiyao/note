1. 基础使用
   1. 添加 canvas 标签
   2. js 获取 canvas DOM
   3. 创建 context 对象：

   	tx.fillRect(x, y, width, height)	

   ```javascript
   var ctx = canvasDom.getContext('2d');
   ctx.fillStyle = "red";	// 填充颜色
   ctx.fillRect(0,0,150,75) // 绘制矩形
   ```

2. 画布 左上角为 （0,0），横为 x， 竖为 y

3. 在Canvas上画线，我们将使用以下两种方法：

   - moveTo(*x,y*) 定义线条开始坐标
   - lineTo(*x,y*) 定义线条结束坐标
   - 使用 stroke() 方法来绘制线条:

4. 画圆

   * arc(x,y,r,start,stop)  arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式:	弧度=(Math.PI/180)\*角度
   * arcTo(x1, y1, x2, y2, raduys)
   * [`arcTo(x1, y1, x2, y2, radius)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arcTo) 

   ```javascript
   ctx.beginPath();
   ctx.arc(95,50,40,0,2*Math.PI);
   ctx.stroke();
   ```

5. ## 线型 Line styles

   可以通过一系列属性来设置线的样式。

   - lineWidth = value
     设置线条宽度。

   - lineCap = type
     设置线条末端样式。

     - `butt`

       线段末端以方形结束。

     - `round`

       线段末端以圆形结束。

     - `square`

       线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

   - lineJoin = type
     设定线条与线条间接合处的样式。

   - miterLimit = value
     限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。

   - getLineDash()
     返回一个包含当前虚线样式，长度为非负偶数的数组。

   - setLineDash(segments)
     设置当前虚线样式。

   - lineDashOffset = value
     设置虚线样式的起始偏移量。

   - context.strokeStyle = "#333"

     线条的颜色