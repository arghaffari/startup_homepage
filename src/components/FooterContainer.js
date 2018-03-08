import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';


class FooterContainer extends React.Component {
  render(){
    return(
      <footer id="section-five">
        <Row>
          <Col xs={4} sm={4} md={4} lg={4} xl={2}>
            <ul>
              <li><a>تلگرام</a></li>
              <li><a>اینستاگرام</a></li>
              <li><a>آپارات</a></li>
              <li><a>توییتر</a></li>
            </ul>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={{span: 3, offset: 1}}>
            <div className="footer-container">
              <h1 className="text-color-one">منابع</h1>
              <p className="text-color-one">پشتیبانی</p>
              <p className="text-color-one">تماس با ما</p>
              <p className="text-color-one">قوانین</p>
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={{span: 3, offset: 1}}>
            <div className="footer-container">
              <h1 className="text-color-one">شرکت</h1>
              <p className="text-color-one">درباره ما</p>
              <p className="text-color-one">فرصت‌های شغلی</p>
              <p className="text-color-one">وبلاگ</p>
              <p className="text-color-one">درباره ما</p>
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={{span: 3, offset: 1}}>
            <div className="footer-container">
              <h1 className="text-color-one">راهنما</h1>
              <p className="text-color-one">تعرفه و قیمت</p>
              <p className="text-color-one">سوالات متداول</p>
              <p className="text-color-one">راهنما</p>
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={{span: 3, offset: 1}}>
            <div className="footer-container">
              <h1 className="text-color-one">محصولات</h1>
              <p className="text-color-one">رامونا</p>
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={{span: 5, offset: 1}}>
            <div className="footer-container">
              <h1 className="text-color-one">آرسیس</h1>
              <p className="text-color-one">آرسیس شماره یک ارائه دهنده نرم افزار آنلاین مدیریت زنجیره فروش و صندوق فروشگاهی آنلاین است. آرسیس به شما این امکان را می دهد کسب و کار خود را به آسانی توسعه دهید</p>
            </div>
          </Col>
        </Row>
        
        
        
        
        
        
      </footer>
    );
  }
}

export default FooterContainer;