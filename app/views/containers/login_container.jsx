import React, {Component} from "react";
import _                  from "lodash";
import {connect}          from "react-redux";
import Login              from "app/views/auth/login";
import {authenticate}     from "app/action_creators/session_action_creator";
import {isTokenSet}       from "app/api/auth_token";


const select = (state) => ({
  authenticationError: state.session.authenticationError  //todo state的结构是怎么生成的
});

/**
* This is the entry point for any page that requires a logged in user
* 容器等于page概念，需要被conncet成智能组件，可以分派action，内部包含纯component。
*/
@connect(select)
export default class LoginContainer extends Component {

  componentWillMount() {
    if (isTokenSet()) {
      this.props.history.pushState(null, "/home");
    }
  }

  render () {
    return (
      <Login onSubmit={this._handleSubmit.bind(this)}
        authenticationError={this.props.authenticationError}
      />
    );
  }

  _handleSubmit ({email, password}) {
    const {dispatch} = this.props;  //todo dispatch如何传入的？

    dispatch(authenticate(email, password)).then((result) => {
      if (result.apiError) return;

      this.props.history.pushState(null, "/home");
    });
  }

}
