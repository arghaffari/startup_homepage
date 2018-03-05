import React from 'react';
import PropTypes from 'prop-types';
import PageHeaders from './PageHeaders';
import AppDownload from './AppDownload';
import { FaInstagram, FaTwitterSquare, FaPhone } from 'react-icons/lib/fa';


const Header = ({headers}) => {
  return (
    <header>
      <nav className="header-wrap">
        <PageHeaders headers={headers} />
        <AppDownload />
        <div id="header-support" >
          <p id="header-support-phone" className="header-supports"> <FaPhone style={{margin: '0.4em'}}/> تلفن پشتیبانی: 88211202-021</p>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  headers: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired
};

export default Header;