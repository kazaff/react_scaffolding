import React                           from "react";
import {Router, Route, Link, Redirect} from "react-router";

//加载所有路由配置用到的组件，这是路由中心化的弊端
import ApplicationContainer            from "app/views/containers/application_container";
import SecuredContentContainer         from "app/views/containers/secured_content_container";
import LoginContainer                  from "app/views/containers/login_container";
import HomeContainer                   from "app/views/containers/home_container";


export default function renderRoutes(store, history) {  //todo 传入store的理由是啥？

  return (
    <Router history={history}>
      <Redirect from="/" to="/home" />

      <Route path="/" component={ApplicationContainer}>

        <Route component={SecuredContentContainer} >
          <Route path="home" component={HomeContainer} />
        </Route>

        <Route path="login" component={LoginContainer} />

      </Route>


    </Router>
  );
};
