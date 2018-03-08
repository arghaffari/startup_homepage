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

if(typeof window !== 'undefined') {
  document.addEventListener('scroll', (e) => {
    var appFeatures =  document.getElementById('app-features');
    var descImg =  document.getElementById('desc-img');
    var dim = appFeatures.getBoundingClientRect();
    var descImageH = descImg.getBoundingClientRect();
    console.log(descImageH);

    // appFeatures.
    if((dim.top <= 0) && (dim.bottom >= descImageH.height)){
      descImg.style.position = 'fixed';
      descImg.style.top = 0;
    } 
    else if ((dim.top <= 0) && (dim.bottom <= descImageH.height)) {
      descImg.style.position = 'relative';
      descImg.style.top = (dim.height - descImageH.height) + 'px';
    } else if((dim.top >= 0) && (dim.bottom >= 0)) {
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
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <div id="app-features">
              <AppFeatures />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <div>
              <img id="desc-img" src="/svg/pos2.svg" style={{width: '500px', margin: 'auto', padding: '20px'}}/>
            </div>
          </Col>
        </Row>        
      </div>
    );
  }
}

export default SectionTwo;