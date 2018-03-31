import React, { Component } from 'react';
import { Row, Col } from 'antd';

class GoodFor extends Component {
  render(){
    return(
      <div className="good-for-wraper">
        <h1>دخلتو در حال حاضر مناسب چه اصنافی است؟</h1>
        <Row>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\boutique.jpg"/>
              <p>بوتیک و پوشاک</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\beauty.jpg"/>
              <p>آرایشی و بهداشتی</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\decore.jpg"/>
              <p>لوازم خانگی</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\digital.jpg"/>
              <p>کالای دیجیتال</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\supermarket.jpg"/>
              <p>سوپرمارکت</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\sport.jpg"/>
              <p>لوازم ورزشی</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\tahrir.jpg"/>
              <p>لوازم تحریر</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <div>
              <img src="\images\question.jpg"/>
              <p>و هر صنفی که به صورت اعداد شمارشی و دانه‌ای کالا یا خدمات ارائه می‌دهد</p>
              <h2>برای اطلاع بیشتر با ما تماس بگیرید</h2>
              <h3>02188211202</h3>
            </div>
          </Col>  
        </Row>
      </div>
    );
  }
}

export default GoodFor;