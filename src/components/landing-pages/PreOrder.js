import React, { Component } from 'react';
import Main from './pre-order/Main';
import Features from './pre-order/Features';
import GoodFor from './pre-order/GoodFor'

class PreOrder extends Component {
  render(){
    return(
      <div>
        <Main />
        <Features />
        <GoodFor />
      </div>
    );
  }
}

export default PreOrder;