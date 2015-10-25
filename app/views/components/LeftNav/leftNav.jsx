import React, {Component} from "react";
import classNames from "./styles";

export default class LeftNav extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul className={classNames.navContainer}>
        <li><a href="#/user-list/1">用户列表</a></li>
        <li><a href="#/home">认证请求列表</a></li>
      </ul>
    );
  }
}
