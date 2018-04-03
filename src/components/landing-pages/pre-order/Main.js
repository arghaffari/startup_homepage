import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PreOrderRegisteration from './PreOrderRegisteration';


class Main extends Component {
  render() {
    return(
      <div className="pre-order-main padding text-align-right">
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>     
            <div className="pre-order-main-desc">
              <p>به مناسب رونمایی از دخلتو</p>
              <p>به جای سالی <b>600 هزار تومان</b></p>
              <p> با 80 درصد تخفیف</p>
              <p><b>فقط 120 هزار تومان </b>پرداخت کنید</p>
              <p>و با معرفی دختلو به <b>5 نفر</b> دیگه</p>
              <p>دخلتو رو برای سالهای بعد <b>رایگان</b> استفاده کن!</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}><PreOrderRegisteration /></Col>
        </Row>
      </div>
    );
  }
}

export default Main;