import React from 'react';
import CommodityAM from 'bundle-loader?lazy&name=[name]!../component/commodityAM/commodityAM.js';
import CommodityYM from 'bundle-loader?lazy&name=[name]!../component/commodityYM/commodityYM.js';
import Bundle from './asRequired_bundle.js';

const AsReq_CommodityAM = (props) => (
  <Bundle load={CommodityAM}>
    {
      //这里只是给this.props.child传一个方法，最后在Bundle的render里面调用
    }
    {(Container) => <Container {...props}/>}
  </Bundle>
)
const AsReq_CommodityYM = (props) => (
  <Bundle load={CommodityYM}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)

export { AsReq_CommodityAM,AsReq_CommodityYM }
