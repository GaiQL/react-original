import React from 'react';
import ReactDOM from 'react-dom';
  import { Select } from 'antd';
const Option = Select.Option;

class CommodityYM extends React.Component{
  constructor(){
    super();
    this.state = {
      selectvalue:''
    }
  }
  componentDidMount(){
    this.setState({
      selectvalue:'11'
    })
  }
  render(){
    return (
      <div>
        <Select key={this.state.selectvalue}>
          <Option value="1">lucy</Option>
          <Option value="2">嘿嘿嘿嘿嘿嘿嘿嘿嘿</Option>
          <Option value="3">哈哈哈哈哈哈哈哈哈</Option>
          <Option value="4">呵呵呵呵呵呵呵呵呵</Option>
          <Option value="5">嘻嘻嘻嘻嘻嘻嘻嘻嘻</Option>
          <Option value="">嘻嘻嘻嘻嘻嘻嘻嘻嘻</Option>
        </Select>
      </div>
    )
  }
}

export default CommodityYM
