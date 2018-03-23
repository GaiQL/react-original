import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
// import '../style/style.css'

// import CommodityAM from './commodityAM/commodityAM.bundle';
// import CommodityYM from './commodityYM/commodityYM.bundle';
import { AsReq_CommodityAM,AsReq_CommodityYM,AsReq_Invitation,AsReq_Massagist } from '../asRequired/asRequired_component.js';

import { BrowserRouter, Route, Link,Switch,HashRouter } from 'react-router-dom';
//使用browserHistory后，需要服务端重定向，把所有请求都重定向到/,这样react-router就能识别出当前路由

const lazyLoad = (loadComponent,props) => {
  //Bundle  包含的是一个函数子组件 由Bundle.js里的this.props.children(this.state.mod)渲染
  return(
   <Bundle load={loadComponent}>
      {(Container) => <Container {...props}/>}
   </Bundle>
)}


// const AsReq_CommodityAM = lazyLoad(CommodityAM);
// const AsReq_CommodityYM = lazyLoad(CommodityYM);

class Try extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <BrowserRouter basename="/">
        <div>
          <Switch>
            <Route path="/commodityAM" component={AsReq_CommodityAM} />
            <Route path="/commodityYM" component={AsReq_CommodityYM} />
            <Route path="/invitation" component={AsReq_Invitation} />
            <Route path="/massagist" component={AsReq_Massagist} />
            <Route path="/" render={() => <h1>Home</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(Try)


/*

用browserHistory就可以实现，但启动后发现除了首页'/'，其他类似于'/user'这样的路径访问不了。服务器需要处理，这里直说下webpack-dev-server的配置

var server = new webpackDevServer(webpack(config),{
    hot: true,
    //如果webpack 配置文件没有更改 output.publicPath,直接配置historyApiFallback:true 就可以
    historyApiFallback: {
          index: config.output.publicPath
    }
});
文档中有对express应用，nginx 服务器配置做说明： https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#browserhistory

webpack-dev-server配置详细说明： http://webpack.github.io/docs/webpack-dev-server.html


*/
