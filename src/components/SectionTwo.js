import React from 'react';
import PropTypes from 'prop-types';
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


class SectionTwo extends React.Component {
  render(){
    return(
      <div id="section-two">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h1 className="main-title">ما به کسب و کارها کمک می‌کنیم سریع تر رشد کنند</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2 className="sub-title">ویژگی‌های منحصر به فرد رامونا چیست؟</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
        </Row>
        
        
        <div className="feature-container">
          <div className="grid-container">
            <div className="grid-item">
              <MdPhonelinkSetup size={50} className="feature-header" />
              <h6 className="feature-header">
                   نصب و راه‌اندازی بسیار ساده
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <MdSecurity size={50} className="feature-header" />
              <h6 className="feature-header">
                تضمین امنیت و محرمانگی
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <FaCoffee size={50} className="feature-header" />
              <h6 className="feature-header">
                   رابط کاربری حرفه‌ای و ساده
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>   
            <div className="grid-item">
              <MdApps size={50} className="feature-header" />
              <h6 className="feature-header" >
                   سیستمی کامل و یکپارچه
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <MdCloudDone size={50} className="feature-header" />
              <h6 className="feature-header" >
                   استفاده به صورت آنلاین و آفلاین
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <MdUpdate size={50} className="feature-header" />
              <h6 className="feature-header" >
                   به روزرسانی مستمر از راه دور
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <MdBusiness size={50} className="feature-header" />
              <h6 className="feature-header" >
                   مدیریت چند فروشگاه بصورت همزمان
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <MdDevices size={50} className="feature-header" />
              <h6 className="feature-header" >
                   دسترسی به حساب در هر زمان و مکان
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            <div className="grid-item">
              <MdDoneAll size={50} className="feature-header" />
              <h6 className="feature-header" >
                   به روز رسانی اطلاعات به صورت لحظه‌ای
              </h6>
              <p className="feature-desc">یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک یک </p>
              <div className="more">بیشتر بدانید ...</div>
            </div>
            {/* <div className="grid-item">
                <FaConnectdevelop size={50}/> */}
          </div>
        </div>
        
      </div>
    );
  }
}

export default SectionTwo;