import React from 'react';
import PropTypes from 'prop-types';
import AppFeatures from './AppFeatures';
import { FaCoffee, FaConnectdevelop } from 'react-icons/lib/fa';
import { 
  MdPhonelinkSetup, 
  MdSecurity, 
  MdCloudDone, 
  MdDoneAll, 
  MdApps,
  MdUpdate,
  MdDevices,
  MdBusiness
} from 'react-icons/lib/md/';
import { Row, Col } from 'antd';

const getScreenSize = () => {
  if(typeof window !== 'undefined') {
    var size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    };
  }
  return size;
};


if(typeof window !== 'undefined') {
  document.addEventListener('scroll', (e) => {
    let size = getScreenSize();
    var appFeatures =  document.getElementById('app-features');
    var descImg =  document.getElementById('desc-img');
    var dim = appFeatures.getBoundingClientRect();
    var descImageH = descImg.getBoundingClientRect();

    if(size.width > 1000){
      if((dim.top <= 0) && (dim.bottom >= descImageH.height)){
        descImg.style.position = 'relative';
        descImg.style.top = Math.abs(dim.top) + 'px';
      } 
      else if ((dim.top <= 0) && (dim.bottom <= descImageH.height)) {
        descImg.style.position = 'relative';
        descImg.style.top = (dim.height - descImageH.height) + 'px';
      } else if((dim.top >= 0) && (dim.bottom >= 0)) {
        descImg.style.position = 'relative';
        descImg.style.top = 0;
      }
    } else {
      descImg.style.position = 'relative';
      descImg.style.top = 0;

    }
    
  }, true);

}



class SectionTwo extends React.Component {
  
  render(){
    return(
      <div id="section-two">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h1 className="main-title">مزایای استفاده از دخلتو</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2 className="sub-title">چه ویژگی‌هایی ما را متمایز می‌کند؟</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div id="app-features">
              <AppFeatures />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div id="desc-img" style={{textAlign: 'center', position: 'relative'}}>
              <img  src="/svg/pos.svg" style={{width: '80%', maxWidth: '500px', margin: '0 auto', padding: '20px'}}/>
            </div>
          </Col>
        </Row>        
      </div>
    );
  }
}

export default SectionTwo;