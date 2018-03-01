import React from 'react';
import PropTypes from 'prop-types';


const PageHeaders = ({headers}) => {
  return(
    <ul className="inline-menu">
      {Object.keys(headers).map((headerId) => {
        return <li className="header" key={headers[headerId].id}>
          {headers[headerId].persianTitle}
        </li>;
      })}
    </ul>
  );
};

PageHeaders.propTypes = {
  headers: PropTypes.object.isRequired,
};

export default PageHeaders;

