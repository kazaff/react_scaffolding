import React, {Component}    from "react";
import ReactDOM              from "react-dom";
import {Router, Route, Link} from "react-router";
import createHashHistory     from "history/lib/createHashHistory";
import {Provider}            from "react-redux";
import renderRoutes          from "app/views/routes";
import configureStore        from "app/store";

// Apply the base styles for ALL the app，加载应用所需的所有样式文件
import "app/assets/stylesheets/base";

// Make sure the static_content gets added to the bundle，加载应用所需的静态js代码
import "app/assets/static_content";



const store = configureStore(); //创建Redux Store实例

//定义一个根组件
class Root extends Component {

  constructor(props) {
    super(props);
    this.history = createHashHistory(); //初始化浏览历史记录对象
  }

  render () {
    return (
      <Provider store={store}>
        {renderRoutes(store, this.history)}
      </Provider>
    )
  }
}

//todo 注意这里使用的是ReactDOM？ 将应用组件注入到指定dom中
ReactDOM.render(<Root/>, document.getElementById("reactApplication"));
