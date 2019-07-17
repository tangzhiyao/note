#### 1.database 数据库

​	1）show dbs  显示数据库

​	2）use dbs   使用（新建）数据库 //不会立即创建，show dbs 不会显示。只有在写入记录后才有

​	3）db          显示正在用的数据库名

​	4）db.dropDatabase()   删除数据库



#### 2.collection 集合

​	1）show collections

#### 3.record/doc 记录/文档

​	1）db.collectionName.find()   显示所有的记录

#### 4.field 字段



#### 5.node中使用

```javascript
	var mongoose = require('mongoose')
	mongoose.connect('mongodb://localhost/数据库名',{useMongoClient:true});
	mongoose.Promise = global.Promise;
	
	var Cat = mongoose.model('Cat',{ name: String }) //第一个参数在数据库中会自动转换成小写 cats 并加上 s，
	
	var kitty = new Cat({ name: 'asdz' });
	kitty.save(function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log('save success')
        }
	})
```

```javascript
	var mongoose = require('mongoose')
    var schema = mongoose.Schema
    //连接数据库
    mongoose.connect('mongodb://localhost/数据库名') //如数据库不存在，则会自动创建
	//设计文档结构(表结构)
	var userSchema = new Schema({
        username: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
	})
    // 返回值：模型构造函数
    var User = mongoose.model('User',userSchema)   
```

##### 	1)增加数据

```javascript
	var admin = new User({
        username: 'admin',
        password: '123456'
	})
	admin.save(function(err, res) {
        if(err) {
            console.log('保存失败')
        } else {
            console.log('save success')
            console.log(res)
        }
	})
```

##### 	2)查询

```javascript
	//按条件查询所有
	User.find({
        username: 'zs'
	},function(err, res) {
        if(err) {
			console.log('query fail')
		} else {
            console.log(res)
		}
	})
	//按条件查询单条记录
	// find()  改成 findOne()
```

##### 	3)删除 

​		使用 remove 方法，代码同上 





