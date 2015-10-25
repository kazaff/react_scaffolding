import React, {Component} from "react";

let Uploader = React.createClass({
  propTypes: {
    accept: React.PropTypes.string,
    onChange: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      accept:"",
    };
  },

  render(){
    let hidden = {display: "none"};

    return (
      <span onClick={this._onClick}>
        <input type="file" ref="file" style={hidden}
          accept={this.props.accept}
          onChange={this._onChange}/>
        {this.props.children}
      </span>
    );
  },

  _onClick(){
    let ele = this.refs.file;
    if(!ele){
      return;
    }
    ele.click();
    ele.value = "";
  },

  _onChange(e){
    let files = e.target.files;
    this.props.onChange(files);
  },

});

export default Uploader;
