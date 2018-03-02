import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaAndroid, FaCloud } from 'react-icons/lib/fa';

class SectionThree extends React.Component {
  render(){
    return(
      <div className="sections" id="section-three">
        <div className="sub-section">
          <div id="apps-decription">
            <div id="applinks">
              <div className="applink">
                <span className="applink-span">کافه بازار</span>
                <FaAndroid size={80} style={{color: 'grey'}}/>
              </div>
              <div className="applink">
                <span className="applink-span">مستقیم</span>
                <FaDownload size={80} style={{color: 'grey'}}/>
              </div>
              <div className="applink">
                <span className="applink-span">تحت وب</span>
                <FaCloud size={80} style={{color: 'grey'}}/>
              </div>
            </div>
          </div>
          <div id="apps-image">
            <img id="cross-platform-svg" src="/svg/cross-platform.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;