import React, {Component} from "react";
import classNames from "./styles";

export default class Header extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={classNames.headerContainer}>
        <div className={classNames.logo}></div>

        {(this.props.user===null) ? '': <div className={classNames.operateButton}><a onClick={this._handleClick.bind(this)}>【设置】</a></div>}
      </div>
    );
  }

  _handleClick(){
    event.preventDefault();
    this.props.onClick();
  }
}
