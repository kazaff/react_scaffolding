import React, {Component} from "react";
import {connect}          from "react-redux";
import {passwordChange}   from "app/action_creators/passwordChange_action_creator";
import {faceChange}       from "app/action_creators/faceChange_action_creator";
import {reloadLocalData}  from "app/action_creators/session_action_creator";
import Face               from "app/views/components/Face/face";
import PasswordChange     from "app/views/components/PasswordChange";

const select = (state) => ({
  user: state.session.user
});

@connect(select)
export default class MeContainer extends Component {

  render () {
    return (
      <div>
        <h1>修改个人信息</h1>
        <Face img={this.props.user.face} onUpload={this._handleUpload.bind(this)} />
        <PasswordChange onSubmit={this._handlePasswordSubmit.bind(this)} />
      </div>
    );
  }

  _handleUpload(face) {
    this.props.dispatch(faceChange({id:this.props.user.id, face: face[0]})).then((result)=>{
      if(result.apiError) return ;
      this.props.dispatch(reloadLocalData());
    }.bind(this));
  }

  _handlePasswordSubmit({oldPsw, newPsw}){
    this.props.dispatch(passwordChange({oldPsw, newPsw}));
  }
}
