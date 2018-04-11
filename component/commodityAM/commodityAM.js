import React from 'react';
import ReactDOM from 'react-dom';
var AMData = require('../../json/am.json');
import '../../module/swiper/swiper-4.1.6.min.css';
// import '../../module/swiper/swiper-4.1.6.min.js';
var Swiper = require('../../module/swiper/swiper-4.1.6.min.js');

import './swiperstyle.css'
// var Mock = require('mockjs');
// import FetchMock from 'fetch-mock';

class CommodityYM extends React.Component{
  constructor(){
    super();
    this.state = {
      num:0,
      dataOrigin:{},
      imgArr:['http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_hospital/1517918494792.png','http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_hospital/1517918992690.png','http://image-product-web.oss-cn-beijing.aliyuncs.com/ym_hospital/1522811316779.jpg']
    }
  }
  componentDidMount(){
    console.log( AMData );

    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
  render(){
    let { imgArr } = this.state;
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
              {

                imgArr.map(( e,i )=>{
                  return ( <div className="swiper-slide" key={ i }><img src={ e } /></div> )
                })

              }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default CommodityYM


/*
<header>
  <img src="img/massageParlorImg.jpg" class="hear_img">
</header>

<section>
  <p class="hospital_itmeTitleName">【传统按摩】经典泰式减压按摩</p>
  <p class="hospital_itmeTitlePrice clear">
    <span>￥</span>
    <span>780/90</span>
    <i class="hospital_itmeTitleMin">Min</i>
    <span>￥980</span>
  </p>
  <div class="hospital_itmeNum clear">
    <p>已预约<span>108</span></p>
    <!-- <p class="hospital_itmeCity">北京市</p> -->
  </div>
</section>
<section class="hospital_margin"></section>
<section class="massage_recommend">
  <div class="massage_recommendTitle">推荐技师</div>
  <ul class="massage_technicianList">
    <li class="clear">
      <img src="img/technician.jpg" class="massage_technicianListImg"/>
      <div class="massage_technicianListText">
        <p>韩洛</p>
        <p>174cm</p>
        <p>从业经验：2年</p>
        <p>658人约</p>
      </div>
    </li>
    <li class="clear">
      <img src="img/technician.jpg" class="massage_technicianListImg"/>
      <div class="massage_technicianListText">
        <p>韩洛</p>
        <p>174cm</p>
        <p>从业经验：2年</p>
        <p>658人约</p>
      </div >
    </li>
  </ul>
</section>
<section class="hospital_margin"></section>
<section class="clear">
  <div class="hospital_hospitalImg">
    <img src="img/hos.png"/>
  </div>
  <div class="hospital_hospitalName">
    <p>富力SPA休闲会馆</p>
    <p>营业时间：24小时</p>
    <p>北京市朝阳区朝阳门外大街227号</p>
  </div>
</section>
<section class="hospital_margin"></section>
<section>
  <img src="img/head.jpg" class="hear_img">
</section>
<section class="download">
  <img src="img/footer.png"/>
</section>
<footer class="footer_img">
  <div>这是一张图片</div>
</footer>


*/
