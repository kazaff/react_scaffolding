import React, {Component} from "react";
import classNames from "./styles";
import _ from "lodash";

export default class UsersList extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let {info} = this.props;
    if(this.props.loading){
      return <span>loading</span>;

    }else if(info){
      return (
        <div className={classNames.userList}>
          <h1>{info.realName}资料</h1>
          <image src={info.face} />
          <br />
          <label>账号：</label>
          <span>{info.account}</span>
          <br />
          <label>姓名：</label>
          <span>{info.realName}</span>
          <br />
          <label>出生日期：</label>
          <span>{info.birth}</span>
          <br />
          <label>手机：</label>
          <span>{info.phone}</span>
          <br />
          <label>邮箱：</label>
          <span>{info.mail}</span>
          <br />
          <label>状态：</label>
          <span>{info.isReal}</span>
          <br />
          <label>性别：</label>
          <span>{info.sex?"男":"女"}</span>
          <br />
          <button onClick={this._handleGoback.bind(this)}>goback</button>
        </div>
      );
    }else{
        return <span>nothing</span>;
    }
  }

  _handleGoback () {
    this.props.onClick();
  }
}
