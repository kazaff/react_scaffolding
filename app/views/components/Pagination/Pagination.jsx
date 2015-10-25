import React, {Component} from "react";
import classNames from "./styles";

export default class Pagination extends Component {

  constructor (props) {
    super(props);
  }

  render(){

    //计算显示的页码
    if(this.props.page < 1){
      this.props.page = 1;
    }

    let pages = [];
    if(this.props.page > this.props.total){
      pages.push(undefined);
    }else{
      //代表目前可以使用的位置(除去当前位置)
      let all = 4
      let need = all;

      //当前页码及左边的页码
      need -= 2; //左边需要2个页码，所以占2个位置，先减去
      //根据当前页码判断其左边的有效位置，换回去多占的位置
      if(this.props.page - 3 < 0){
        need += Math.abs(this.props.page - 3);
      }
      for(let i = 0;  i <= all - need; i++){
        pages.unshift(this.props.page - i);
      }

      //当前页码右边的页码
      for(let i = 1; i <= this.props.total - this.props.page && i <= need; i++){
        pages.push(this.props.page + i);
      }

      //检查当前所有位置是否都存在，若不足，缺的个数交给左边补
      let currentLeftPage = pages[0];
      for(let i = 1; i <= need - (this.props.total - this.props.page); i++){
        if(currentLeftPage - i > 0){
          pages.unshift(currentLeftPage - i);
        }
      }
    }

    let prev = <button
      onClick={this.props.onClick.bind(null, this.props.page-1)}>&laquo;</button>;
    if(this.props.page == 1){
      prev = <button disabled={true}>&laquo;</button>
    }

    let next = <button
      onClick={this.props.onClick.bind(null, this.props.page+1)}>&raquo;</button>;
    if(this.props.page >= this.props.total){
        next = <button disabled={true}>&raquo;</button>
    }

    if(this.props.total){
      return (

        <div centered={this.props.centered}>
          {prev}

          {pages.map((row, index)=>{
            return (
              <button key={index} active={this.props.page==row?true:false}
                onClick={this.props.onClick.bind(null, row)}>{row?row:"无效页码"}</button>
            );
          })}

          {next}
        </div>
      );
    }else{
      return <div></div>;
    }
  }
}
