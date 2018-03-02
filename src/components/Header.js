import React from 'react';
import PropTypes from 'prop-types';
import PageHeaders from './PageHeaders';
import AppDownload from './AppDownload';


const Header = ({headers}) => {
  return (
    <div className="header">
      <div className="header-wrap">
        <PageHeaders headers={headers} />
        <AppDownload />
      </div>
    </div>
  );
};

Header.propTypes = {
  headers: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired
};

export default Header;