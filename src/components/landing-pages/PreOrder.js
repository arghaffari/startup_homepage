import React, { Component } from 'react';
import Main from './pre-order/Main';
import Features from './pre-order/Features';

class PreOrder extends Component {
  render(){
    return(
      <div>
        <Main />
        <Features />
      </div>
    );
  }
}

export default PreOrder;