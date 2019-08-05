### React

1. 使用函数获取父组件传递的值 只需要 props.value  使用类获取 则需要使用 this.props.value

2. 使用 数据的副本 ：简化复杂功能、跟踪数据改变、确定 react 中何时重新渲染     （来自react文档）

3. React的组件类首字母要大写

   #### jsx 语法

   1. jsx 都用 `()` 包裹以防出错。

   2. jsx 语法中使用变量用 `{}`包裹。（vue 中用 `{{}}`）

   3. {} 中可以放置任何有效的 `JavaScript 表达式`  

   4. jsx 语法在标签中添加类名，需要用 `className`;

      标签中属性名涉及到 js 中的关键字都需要使用特定的名称(一些标签属性都改用驼峰命名法)。

      ​	例： class 是 js 中声明类的关键字，所以要用 className，其他的还有 for 等

   ```jsx
   const test = (<div className = "name"></div>)
   // 这只是一个普通变量，没有状态；
   ```

   5. jsx 中单标签必须要结束 `<tag />`

   #### 组件

   1. 函数式组件

      1. 无状态
      2. 接受传值

      ```jsx
      function AppHeader(prop) {	// 组件名首字母要大写
          return (
              <div>head{prop.value}</div>
          )
      }
      // 后面用 <AppHeader /> 引用该组件
      // 想要组件不被渲染 return null 即可
      ```

   2. 使用 class 定义一个组件

      1. 有状态

      ```jsx
      class AppFooter extends React.Component {
          constructor() {
              super()
              this.state = {
                  dataname: value
              }
          }
          render () {
              return (
                  <div>
                      { this.state.dataname }
                  	<button onClick={this.handleClick}></button>
                  </div>
              )
          }
          handleClick() {	// 定义事件，react 中推荐在处理事件函数名前加上 handle
              this.setState({	//	不能直接用 this.state.dataname 修改值，this 会指向 window
                  dataname: 'value'
              })
          }
      }
      // 使用方式同函数式组件
      ```

   3. 声明周期方法

      ​	组件在处在某一周期所执行的方法；

      例：

      ​	 `componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器： 

      ​	 `componentWillUnmount()` 生命周期方法中清除计时器： 

      ```jsx
      componentDidMount() {
      	this.timerID = setInterval(
          	() => this.tick(),
            	1000
      	);
      }	// 组件被渲染到 DOM 后执行该方法
      
      componentWillUnmount() {
      	clearInterval(this.timerID);
      }	// 组件被删除时，执行该方法
      
      ```

   4. state 

      ​	不要直接修改 state：this.state.valueName = ‘value’；

      ​	用 `this.state.valueName` 来获取属性值

      ​	使用 setState 方法：this.setState({ valueName: 'value' })；只有通过该方法才能重新渲染组件

   5. key

   6. react 的生命周期

      ![react生命周期](C:\Users\tzy\Desktop\note\img-git\react生命周期.png)





### antdesign





### dva

demo： <https://www.yuque.com/ant-design/course/ig6mzb> 

```javascript
// model/xxx.js
export default {
  namespace: 'some_namespace',	// 唯一标识
    state: {
        data: [
      {
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter: 100
    },		// 同 react 的 state
  effects: { // 定义 effects 成员，用来处理异步操作
    'someEffect': function*() {},
    'someOtherEffect': function*() {},
     getData: function* ({ payload }, { call, put }) {
  		const data = yield call(SomeService.getEndpointData, payload, 		'maybeSomeOtherParams');
         // 第一个参数是一个函数（返回值需要是 promise 对象），
  		yield put({ type: 'getData_success', payload: data });
         // put 用来发送一个 action，作用同 dispatch，由 effects 或 reducers 接收
	}
  },
  reducers: {
    // 定义方法，需要是纯函数
      addNewCard(state, { payload: newCard }) {	// payload 作为额外信息传入
      const nextCounter = state.counter + 1;
      const newCardWidthId = {...newCard, id: nextCounter};
      const nextData = state.data.concat(newCardWidthId);
      return {	// 最后返回修改的数据
        data: nextData,
        counter: nextCounter
      }
    }
  },
}
```