import React, {Component} from "react";
import classNames from "./styles";

export default class PasswordChange extends Component {

  constructor (props) {
    super(props);

    this.state = {
      oldPsw: "",
      newPsw: "",
      verifyPsw: "",
      canSubmit: false,
    };
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <label>原始密码：</label>
        <input value={this.state.oldPsw} onChange={this._handleOldPswChange.bind(this)}
          type="password" placeholder="Password" />
        <br /><br />
        <label>新密码：</label>
        <input value={this.state.newPsw} onChange={this._handleNewPswChange.bind(this)}
          type="password" placeholder="Password" />
        <br /><br />
        <label>重新输入新密码：</label>
        <input value={this.state.verifyPsw} onChange={this._handleVerifyPswChange.bind(this)}
          type="password" placeholder="Password" />
        <br /><br />
        <div>
          <input type="submit" value="保存" disabled={this.state.canSubmit?"":"disabled"} />
        </div>
      </form>
    );
  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit({oldPsw: this.state.oldPsw, newPsw: this.state.newPsw});
  }

  _handleOldPswChange(event){
    this.setState({oldPsw: event.target.value});
    this.__canSubmit();
  }

  _handleNewPswChange(event){
    this.setState({newPsw: event.target.value});
    this.__canSubmit();
  }

  _handleVerifyPswChange(event){
    this.setState({verifyPsw: event.target.value});
    this.__canSubmit();
  }

  __canSubmit(){
    //todo 验证表单输入是否合法
    this.setState({canSubmit: true});
  }
}
