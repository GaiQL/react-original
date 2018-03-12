import React from 'react';
import ReactDOM from 'react-dom';

class CommodityYM extends React.Component{
  constructor(){
    super();
    this.state = {
      num:0
    }
  }
  additional = () => {
    this.setState({
      num:++this.state.num
    })
  }
  render(){
    return (
      <div>
        <div>虽然实现了，但是仍然继续配置么，要继续报错么{this.state.num},那就先这样吧，配了两种...</div>
        <div style={{
          width:'100px',
          height:'100px',
          border:'1px solid #000'
        }} onClick={()=>{this.additional()}}></div>
        <div>哈哈啊哈哈哈哈哈哈哈哈哈哈，出来吧神龙！！！！！！</div>
        <div>谁说状态保存了！！</div>
        <div>这次是不是可以了</div>
      </div>
    )
  }
}

export default CommodityYM
