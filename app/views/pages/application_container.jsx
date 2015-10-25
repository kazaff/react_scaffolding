import React               from "react";
import {connect}           from "react-redux";
import Header              from "app/views/components/Header/header";

const select = (state) => ({
  isInitializingSession: state.application.isInitializingSession,
  sessionValid: state.application.sessionValid,
  user: state.session.user
});

/**
* Entry point for the whole App this includes secured and not secured content.
* Application gets composed by redux therefore we can access to all the redux
* sugar from here after.
*/
@connect(select)
export default class ApplicationContainer extends React.Component {

  render () {
    return (
      <div>
        <Header user={this.props.user} onClick={this._handleClick.bind(this)} />
        {this.props.children}
      </div>
    );
  }

  _handleClick(){
    this.props.history.pushState(null, "/me");
  }
}
