import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaAndroid, FaCloud } from 'react-icons/lib/fa';
import { Row, Col, Button } from 'antd';

class SectionThree extends React.Component {
  render(){
    return(
      <div id="section-three">
        <Row>
          <Col style={{textAlign: 'center'}} xs={24} sm={24} md={16} lg={14} xl={14}>
            <div id="apps-image">
              <img id="cross-platform-svg" src="/svg/pos3.svg" />
            </div>
          </Col>
          <Col style={{textAlign: 'center'}} xs={24} sm={24} md={8} lg={10} xl={10}>
          <Button type="primary" icon="download" size={'large'}>Download</Button>
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