import React                           from "react";
import {Router, Route, Link, Redirect} from "react-router";

//加载所有路由配置用到的组件，这是路由中心化的弊端
import ApplicationContainer            from "app/views/pages/application_container";
import SecuredContentContainer         from "app/views/pages/secured_content_container";
import LoginContainer                  from "app/views/pages/login_container";
import HomeContainer                   from "app/views/pages/home_container";
import UserListContainer               from "app/views/pages/userList_container";
import UserInfoContainer               from "app/views/pages/userInfo_container";
import MeContainer                   from "app/views/pages/me_container";


export default function renderRoutes(store, history) {  //todo 传入store的理由是啥？

  return (
    <Router history={history}>
      <Redirect from="/" to="/home" />

      <Route path="/" component={ApplicationContainer}>

        <Route component={SecuredContentContainer} >
          <Route path="home" component={HomeContainer} />
          <Route path="me" component={MeContainer} />
          <Route path="user-list/:page" component={UserListContainer} />
          <Route path="user/:id" component={UserInfoContainer} />
        </Route>

        <Route path="login" component={LoginContainer} />

      </Route>


    </Router>
  );
};
