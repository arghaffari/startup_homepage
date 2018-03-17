import React, { Component } from 'react';
import { Row, Col } from 'antd';


class Main extends Component {
  render() {
    return(
      <div style={{height: '100vh'}}>
        <Row>
          <Col xs={12} sm={4} md={6} lg={8} xl={12}>Col</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={12}>
            <p>به جای سالی <b>600 هزار تومان</b> به مناسب رونمایی از دخلتو</p>
            <p> با 80 درصد تخفیف</p>
            <p>فقط 120 هزار تومان پرداخت کنید</p>
            <p>و با معرفی دختلو به 5 نفر دیگه</p>
            <p>دخلتو رو برای سالهای دیگه رایگان استفاده کن!</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;