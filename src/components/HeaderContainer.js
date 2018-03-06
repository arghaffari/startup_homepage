import React from 'react';
import PropTypes from 'prop-types';
import PageHeaders from './PageHeaders';
import AppDownload from './AppDownload';
import { FaInstagram, FaTwitterSquare, FaPhone } from 'react-icons/lib/fa';
import { Row, Col } from 'antd';


const HeaderContainer = ({headers}) => {
  return (
    <header className="wrap">
      <nav>
        <Row>
          <Col style={{padding: '1em'}}  xs={24} sm={8} md={8} lg={4} xl={4}>
            <AppDownload />
          </Col>
          <Col style={{padding: '1em'}} xs={24} sm={16} md={16} lg={8} xl={7}>
            <div id="header-support" >
              <p id="header-support-phone" className="header-supports"> <FaPhone style={{margin: '0.4em'}}/> تلفن پشتیبانی: 88211202-021</p>
            </div>
          </Col>
          <Col style={{padding: '1em'}} xs={24} sm={24} md={24} lg={12} xl={13}>
            <PageHeaders headers={headers} />
          </Col>
        </Row>
      </nav>
    </header>
  );
};

HeaderContainer.propTypes = {
  headers: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired
};

export default HeaderContainer;