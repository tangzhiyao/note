cmd  中用打开php   -a进入控制台模式

   

echo  '字符'   ,  '字符'   ；可以打印多个      

var_dump()    打印  一般调试的时候用

指令式语句  （ 大括号改为冒号）        

```php
if（ture）：               
    echo   '啊啊啊啊'；          
endif； 
```

```php
$变量名 = 值 ； 
$arr = [1, 2, 3, 4];          
$arr=array(1,2,3,4);线性数组     

in_array(检索值，查找的数组)在一个数组找某个值     

foreach ($arr as $value) {
	echo $value;  //  foeach（$key  as $value）遍历key每一个值给value 
}     
$assoc = [
    'key1' => 'value',
    'key2' => 'value',        
	'key3' => 'value'
]; // 关联数组   

 foreach ($assoc as $key => $value) {} 

```

 在局部中对变量加global 可以获取全局作用域中的变量

   

注意    单引号不支持转义字符    '\n'  认为是两个字符，没有特殊含义 

 trim（$str） 去掉字符串两边的空格，也可以自己添加去除的字符 

 ‘0’ ==  false    结果为true   字符0隐式转换为数字0    ，false转化成0

 count（） 数组长度    

使用时间函数注意时区 

 'php文件' ;    载入其它文件   

 require_once   '     '   之前载入过则不在执行作用同上  

      两个函数如果载入文件不存在就会报错，后面程序不执行

 include  '   '    作用同上    文件不存在报警告，会继续执行其它代码 

表单元素被提交都需要有name属性 在多选的checkbox中name属性中加中括号可以指向数组，避免多选时的属性值覆盖

  file_put_contents（“文件名”，输入的数据，FILE_APPEND）；

​	 向文件中追加写入数据(FILE_AOOEND)有其他的值设置是否覆盖

 file_get_contents(文件名)   读文件内容   

 $\_SERVER['REQUEST_METHOD']  表单的提交方法  可以和“POST” “GET”等方法比较。 if（$\_SERVER['REQUEST_METHOD']==“POST”；  

 $str1 = "Hello World!"; 

  $str2 = "Welcome to HutaoW's BLOG!";    //连接上面两个字符串 中间用空格分隔   $str3 = $str1 . " " . $str2;   "Hello World! Welcome to HutaoW's BLOG!"  中间多了一个空格 

用点连接字符串 



 如果一个表单有文件域，则要将method设为post，enctype设为multipart/form-data(分成多部分上传)，只有设置了enctype才能用$\_FILES  



isset（）判断是否设置了该变量 

isempty（）判断该变量是否为空  



上传文件

​	 json 格式属性名与字符串值需要用双引号包裹 

​	json_decode(字符串,true)将字符串转化为json格式数据,

​		true用关联数组方式 



$\_FILES['name']['error']==UPLOAD_ERR_ORR 判断文件是否上传成功 



单个多文件上传  

​	单个文件域上传多个文件,input:file要加上multiple,name属性后跟上[]即可 

 	./   相对路径       /绝对路径(网站根目录下) 



$_GET['属性']    获取url中问号后的值    

​	demo.php?id=ss     echo $_GET['id'];



在函数前加上@符号可以忽略错误警告(错误信息不显示) 



"abc{$变量名}efg"    可以直接把变量拼接成一个字符串 



php中在函数内用函数外的变量需要将变量定义完global



setcookie(name，value，time()*n秒）设置cookie,time可以设置过期时间        

​	当只设置name属性则删除该cookie  

​	用session之前需要启动session。session_start（） $_SESSION['name]='value'  



```javascript
var xhr = new XMLHttpRequest();			 	

xhr.open('GET','http://test.io/test.php');//打开请求页面(类似浏览器输入url) 
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 					//	设置请求头(),当下面的请求体为urlencode格式设置,则需要加入括号内的内容，否则跳转的页面无法接受send的值 	

xhr.send('key1=value&key2=vlue2');//以urlencode格式设置请求体(按下回车)   	
xhr.onreadystatechange = function() {
    if(xhr.readystate != 4) return; 
    console.log(this);//取得响应的结果   
}

//当xhr的状态不到4的时候返回 		


```



在php页面返回数据时最好在开始加伤返回的数据类型    header("Content-Type:application/类型") 



 a文件引用(include)b文件，则b文件可以使用a文件中的变量 



sql语句用双引号包裹，内部字符串用单引号  



php 查询 mysql 数据库中的数据

​	通过 sql 语句后面加上 `limit n,m` ，查找第 n 条后的 m 条数据（不包括 n）。



在多条件查询时；where 可以加上一个 1=1（where 1=1 and 其他条件）。可以避免在没有条件时 sql 报错