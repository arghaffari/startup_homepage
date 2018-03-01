import React from 'react';
import PropTypes from 'prop-types';
import PageHeaders from './PageHeaders';



const Header = ({headers}) => {
  return (
    <div className="header">
      <PageHeaders headers={headers} />
    </div>
  );
};

Header.propTypes = {
  headers: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired
};

export default Header;