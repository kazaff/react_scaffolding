import React, {Component} from "react";
import {connect}           from "react-redux";

const select = (state) => ({
  user: state.session.user
});

@connect(select)
export default class HomeContainer extends Component {

  render () {
    console.log(this.props.user);
    return <div>Home!--{this.props.user.realName}</div>;
  }
}
