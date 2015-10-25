import React, {Component}       from "react";
import {connect}                from "react-redux";
import {search, usersList, userStatus, userDelete}      from "app/action_creators/usersList_action_creator";
import SearchBar                from "app/views/components/SearchBar/searchBar";
import UsersList                from "app/views/components/UsersList/usersList";
import Pagination               from "app/views/components/Pagination/pagination";

const select = (state) => ({
  total: state.usersList.total,
  users: state.usersList.users,
  keyword: state.usersList.keyword,
  loading: state.usersList.loading
});

@connect(select)
export default class UserListContainer extends Component {

  componentDidMount(){
    if(this.props.location.query.keyword){
      this.props.dispatch(search(this.props.location.query.keyword));
    }
    this.props.dispatch(usersList(this.props.params.page||1, 15, this.props.location.query.keyword));
  }

  componentDidUpdate(prevProps){
    let oldKeyword = prevProps.location.query.keyword;
    let newKeyword = this.props.location.query.keyword;
    if(oldKeyword !== newKeyword){
      this.props.dispatch(search(newKeyword||null));
      this.props.dispatch(usersList(1, 15, newKeyword||null));
    }else{
      let oldPage = prevProps.params.page
      let newPage = this.props.params.page
      if (newPage !== oldPage){
          this.props.dispatch(usersList(newPage||1, 15, this.props.keyword));
      }
    }
  }

  render () {
    return (
      <div>
        <SearchBar keyword={this.props.keyword} onSubmit={this._handleSearch.bind(this)} />
        <UsersList users={this.props.users} loading={this.props.loading} onClick={this._handleOperation.bind(this)} />
        <Pagination page={Number(this.props.params.page)} total={this.props.total} onClick={this._handlePageClick.bind(this)} />
      </div>
    );
  }

  _handleSearch (keyword) {
    this.props.dispatch(search(keyword));
    //更新url
    this.props.history.pushState(null, "/user-list/1", {keyword: keyword});
  }

  _handlePageClick (page) {
    if(this.props.keyword){
      this.props.history.pushState(null, "/user-list/"+page, {keyword: this.props.keyword});
    }else{
      this.props.history.pushState(null, "/user-list/"+page);
    }
  }

  _handleOperation({type, index, user}){
    if(type === "info"){
      this.props.history.pushState(null, "/user/"+user.id);
    }
    else if(type === "status"){
      this.props.dispatch(userStatus(index, user.id, user.isReal?0:1));
    }
    else if(type === "delete"){
      this.props.dispatch(userDelete(index, user.id));
    }
  }
}
