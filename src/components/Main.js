import React from 'react';
import PropTypes from 'prop-types';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import Footer from './Footer';


const Main = ({mainContent}) => {
  return (
    <div className="wraper">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

Main.propTypes = {
  mainContent: PropTypes.object,
  // id: PropTypes.number.isRequired
};

export default Main;