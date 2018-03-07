import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';


class SectionOne extends React.Component {
  render(){
    return(
      <div id="section-one">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h1 className="section-one-header">دخلتو همیشه همراهته!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={10}>
            <div className="div-circle-container">
              <ul className='circle-container'>
                <li><img  src="svg/business/024-investment.svg" /></li>
                <li><img  src="svg/business/018-transfer.svg" /></li>
                <li><img  src="svg/business/014-in-love.svg" /></li>
                <li><img  src="svg/business/007-cloud.svg" /></li>
                <li><img  src="svg/business/001-worker.svg" /></li>
                <li><img  src="svg/business/021-growth-1.svg" /></li>
                <li><img  src="svg/business/004-building.svg" /></li>
                <li><img  src="svg/business/005-professional.svg" /></li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={14} >
            <div className="section-one-desc">
              <h1 className="section-one-desc-header">
              فروشگاهت از دور تو دستته
              </h1>
              <p>در هر زمان و مکان می تونی فروشگاه رو کنترل کنی</p>
              <p>اطلاعاتت رو همیشه حتی تو گوشیت داشته باشی</p>
              <p>کارمندها وشعب فروشگاه هاتو بیشتر کنی</p>
              <p>و بدونی استفاده از دخلتو انقدر سادست که نیاز به هیچ دانش تخصصی نداری ...</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SectionOne;