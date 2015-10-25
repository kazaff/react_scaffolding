import React, {Component} from "react";
import classNames from "./styles";

export default class Login extends Component {

  constructor (props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      verification: ""
    };
  }

  render () {
    return (
      <div className={classNames.loginContainer}>
        <h1>管理员登录</h1>
        <form onSubmit={this._handleSubmit.bind(this)}>

          {this._renderAuthenticationErrors()}

          <label>账号：</label>
          <input value={this.state.email} onChange={this._handleEmailChange.bind(this)}
            type="email" placeholder="Email" />

          <br /><br />

          <label>密码：</label>
          <input value={this.state.password} onChange={this._handlePasswordChange.bind(this)}
            type="password" placeholder="Password" />

          <br /><br />

          <label>验证码：</label>
          <input value={this.state.verification} onChange={this._handleVerificationChange.bind(this)}
            type="text" placeholder="验证码" />
          <img className={classNames.verification} src={this.props.verification} />
          <a onClick={this._handleRefreshClick.bind(this)}>更改</a>
          <br /><br />

          <div>
            <input type="submit" value="登录" disabled={(this.props.loading?"disabled":"")} />
          </div>

        </form>
      </div>
    );
  }

  _renderAuthenticationErrors () {
    if (this.props.authenticationError) {
      return <div>{this.props.authenticationError.errorMessage}</div>
    }
  }

  _handleSubmit (event) {
    event.preventDefault();
    this.props.onSubmit({email: this.state.email, password: this.state.password, verification: this.state.verification});
  }

  _handleEmailChange (event) {
    this.setState({email: event.target.value});
  }

  _handlePasswordChange (event) {
    this.setState({password: event.target.value});
  }

  _handleVerificationChange (event) {
    this.setState({verification: event.target.value});
  }

  _handleRefreshClick (event){
    event.preventDefault();
    this.props.onRefresh();
  }

}
