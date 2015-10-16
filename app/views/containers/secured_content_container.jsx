import React, {Component} from "react";
import {isTokenSet}       from "app/api/auth_token";

export default class SecuredContentContainer extends Component {

  componentWillMount() {
    if (!isTokenSet()) {
      this.props.history.pushState(null, "/login"); //由Route传入的history
    }
  }

  render () {
    return this.props.children;
  }
}
