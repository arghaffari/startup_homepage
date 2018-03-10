import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaAndroid, FaCloud } from 'react-icons/lib/fa';
import { Row, Col, Button } from 'antd';

class SectionThree extends React.Component {
  render(){
    return(
      <div id="section-three">
        <Row style={{top: '50%', transform: 'translateY(-50%)'}}>
          <Col style={{textAlign: 'center'}} xs={24} sm={24} md={16} lg={14} xl={14}>
            <div id="apps-image">
              <img id="cross-platform-svg" src="/svg/pos3.svg" />
            </div>
          </Col>
          <Col style={{textAlign: 'center'}} xs={24} sm={24} md={8} lg={10} xl={10}>
            <ul style={{listStyleType: 'none', transform: 'translate(0, 50%)'}}>
              <li style={{margin: '10px'}}>
                <Button style={{width: '205px'}} type="primary" icon="android" size={'large'}>اندروید</Button>
              </li>
              <li style={{margin: '10px'}}>
                <Button style={{width: '205px'}} type="primary" icon="download" size={'large'}>دانلود مستقیم اندروید</Button>
              </li>
              <li style={{margin: '10px'}}>
                <Button style={{width: '205px'}} type="primary" icon="cloud" size={'large'}>تحت وب</Button> 
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SectionThree;