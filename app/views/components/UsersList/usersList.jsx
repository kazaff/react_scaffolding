import React, {Component} from "react";
import classNames from "./styles";
import _ from "lodash";

export default class UsersList extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let that = this;
    if(this.props.loading){
      return <span>loading</span>;

    }else if(this.props.users){
      return (
        <ul className={classNames.userList}>
          {_.map(this.props.users, function(row, index){
            return (
              <li key={row.id}>
                  <span>{row.account}</span>
                  <span>【<a onClick={()=>that._handleInfoClick(row)}>详情</a>】</span>
                  <span>【<a onClick={()=>that._handleStatusClick(index, row)}>禁用</a>】</span>
                  <span>【<a onClick={()=>that._handleDeleteClick(index, row)}>删除</a>】</span>
              </li>
            );
          })}
        </ul>
      );
    }else{
        return <span>nothing</span>;
    }
  }

  _handleInfoClick (user) {
    let type = "info";
    this.props.onClick({type, user});
  }

  _handleStatusClick (index, user) {
    let type = "status";
    this.props.onClick({type, index, user});
  }

  _handleDeleteClick (index, user) {
    let type = "delete";
    this.props.onClick({type, index, user});
  }
}
