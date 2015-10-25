import React, {Component} from "react";
import {isTokenSet}       from "app/api/auth_token";
import classNames from "./styles";
import LeftNav from "app/views/components/LeftNav/leftNav";

export default class SecuredContentContainer extends Component {

  componentWillMount() {
    if (!isTokenSet()) {
      this.props.history.pushState(null, "/login"); //由Route传入的history
    }
  }

  render () {
    return (
      <div className={classNames.securedContainer}>
        <LeftNav />
        <div className={classNames.mainContainer}>{this.props.children}</div>
      </div>
    );
  }
}
