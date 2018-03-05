import React from 'react';
import PropTypes from 'prop-types';


const PageHeaders = ({headers}) => {
  return(
    <ul>
      {Object.keys(headers).map((headerId) => {
        return <li key={headers[headerId].id}>
          <a>{headers[headerId].persianTitle}</a>
        </li>;
      })}
    </ul>
  );
};

PageHeaders.propTypes = {
  headers: PropTypes.object.isRequired,
};

export default PageHeaders;

