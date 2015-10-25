import React, {Component} from "react";
import classNames from "./styles";

export default class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = {
      keyword: ""
    };
  }

  render () {
    return (
      <div>
        <input value={this.props.keyword} onChange={this._handleKeywordChange.bind(this)}
          type="text" placeholder="输入搜索关键字" />
        <button onClick={this._handleSubmit.bind(this)}>搜索</button>
      </div>
    );
  }

  _handleKeywordChange (event) {
    this.setState({keyword: event.target.value});
  }

  _handleSubmit () {
    this.props.onSubmit(this.state.keyword);
  }
}
