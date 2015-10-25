import React, {Component} from "react";
import classNames from "./styles";
import Uploader from "app/views/components/Uploader";

export default class Face extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <image src={this.props.img} width='140' height='140' />
        <br />
         <Uploader accept="image/*" onChange={this._faceChange.bind(this)}>
           <button>更换头像</button>
         </Uploader>
      </div>
    );
  }

  _faceChange(files){
    event.preventDefault();
    this.props.onUpload(files);
  }
}
