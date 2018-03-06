import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaAndroid, FaCloud } from 'react-icons/lib/fa';
import { Row, Col } from 'antd';

class SectionThree extends React.Component {
  render(){
    return(
      <div id="section-three">
        <Row>
          <Col style={{textAlign: 'center'}} xs={24} sm={24} md={16} lg={16} xl={16}>
            <div id="apps-image">
              <img id="cross-platform-svg" src="/svg/cross-platform.svg" />
            </div>
          </Col>
          <Col style={{textAlign: 'center'}} xs={24} sm={24} md={8} lg={8} xl={8}>
            <div id="apps-decription">
              <div id="applinks">
                <div className="applink">
                  <span className="applink-span">کافه بازار</span>
                  <FaAndroid size={35} style={{color: 'grey'}}/>
                </div>
                <div className="applink">
                  <span className="applink-span">مستقیم</span>
                  <FaDownload size={35} style={{color: 'grey'}}/>
                </div>
                <div className="applink">
                  <span className="applink-span">تحت وب</span>
                  <FaCloud size={35} style={{color: 'grey'}}/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        
      </div>
    );
  }
}

export default SectionThree;