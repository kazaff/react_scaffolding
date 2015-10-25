import React, {Component} from "react";
import {connect}           from "react-redux";
import {user}      from "app/action_creators/userInfo_action_creator";
import UserInfo    from "app/views/components/UserInfo/userInfo";

const select = (state) => ({
  loading: state.userInfo.loading,
  info: state.userInfo.info,
  userError: state.userInfo.userError
});

@connect(select)
export default class UserInfoContainer extends Component {

  componentDidMount(){
    this.props.dispatch(user(this.props.params.id));
  }

  componentDidUpdate(prevProps){
    let oldId = prevProps.params.id
    let newId = this.props.params.id
    if (newId !== oldId){
        this.props.dispatch(user(newId));
    }
  }

  render () {
    return (
      <div>
        <UserInfo info={this.props.info} loading={this.props.loading} onClick={this._handleGoback.bind(this)} />
      </div>
    );
  }

  _handleGoback(){
    this.props.history.go(-1);
  }
}
