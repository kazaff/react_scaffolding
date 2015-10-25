import React, {Component} from "react";
import _                  from "lodash";
import {connect}          from "react-redux";
import Login              from "app/views/components/Login/login";
import {authenticate}     from "app/action_creators/session_action_creator";
import {verification}     from "app/action_creators/verification_action_creator";
import {isTokenSet}       from "app/api/auth_token";


const select = (state) => ({
  authenticationError: state.session.authenticationError,  //todo state的结构是怎么生成的？
  verificationImage: state.verification.verificationImage,
  verificationKey: state.verification.verificationKey,
  verificationError: state.verification.verificationError,
  loading: state.session.authenticating || state.verification.verifying,
});

/**
* This is the entry point for any page that requires a logged in user
* 容器等于page概念，需要被conncet成智能组件，可以拥有应用全局state，可以分派action，内部包含纯component。
*/
@connect(select)
export default class LoginContainer extends Component {

  componentWillMount() {
    if (isTokenSet()) {
      this.props.history.pushState(null, "/home");
    }

    this.props.dispatch(verification());
  }

  render () {
    return (
        <Login onSubmit={this._handleSubmit.bind(this)}
          authenticationError={this.props.authenticationError}
          verification={this.props.verificationImage}
          onRefresh={this._handleRefresh.bind(this)}
          loading={this.props.loading}
        />
    );
  }

  _handleSubmit ({email, password, verification}) {
    const {dispatch} = this.props;  //todo dispatch如何传入的？应该是由connect注入的

    dispatch(authenticate(email, password, verification, this.props.verificationKey)).then((result) => {
      if (result.apiError) return;
      this.props.history.pushState(null, "/home");  //根据result更新路由，但不修改应用状态，应用状态在reducer里更新
    });
  }

  _handleRefresh(){
    const {dispatch} = this.props;

    dispatch(verification());
  }

}
