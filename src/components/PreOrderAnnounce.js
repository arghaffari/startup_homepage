import React, { Component } from 'react';
import config from '../../config';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';



class PreOrderAnnounce extends Component {
  static propTypes = {
    hasText: PropTypes.bool.isRequired,
    fontSize: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
  }

  static defaultProps = {
    hasText: true,
  }

  state = {
    endpoint: config.serverUrl,
    response: 'false',
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    hasText: this.props.hasText,
    fontSize: this.props.fontSize,
    bgColor: this.props.bgColor,
    textColor: this.props.textColor,
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('PreOrderDeadLine', data => 
    {
      setInterval(() => {
        const date = this.calculateCountdown(data);
        date ?
          this.setState(
            { 
              response: true,
              days: date.days,
              hours: date.hours,
              min: date.min,
              sec: date.sec 
            }
          ) : this.stop;
      
      }, 1000);
    }
    );
    
  }

  componentWillUnmount() {
    this.stop();
  }

  // shouldComponentUpdate(){
  //   this.setState({fontSize: this.props.fontSize});
  // }

  calculateCountdown(endDate) {
    if(endDate.sec > 0){
      endDate.sec -= 1;
    } else {
      if(endDate.min > 0){
        endDate.min -= 1;
        endDate.sec = 59;
      } else {
        if(endDate.hours > 0){
          endDate.hours -= 1;
          endDate.min = 59;
          endDate.sec = 59;
        } else {
          if(endDate.days > 0){
            endDate.days -= 1;
            endDate.hours = 23;
            endDate.min = 59;
            endDate.sec = 59; 
          } else {
            console.log('timeout');
          }
        }
      }
    }
 
    

    this.setState(endDate);

    return endDate;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  hasText(){
    if(this.state.hasText){
      return <p>حداقل 80٪ تخفیف پیش فروش دخلتو فقط تاپایان فروردین و به تعداد محدود</p>;
    }
  }

  textStyle(){
    return {color: this.state.textColor};
  }

  render() {
    const countDown = this.state;
    return (
      <a href="/pages/landing-page/pre-order" target="_tab">
        <div className="pre-order" style={{fontSize: this.props.fontSize, backgroundColor: this.state.bgColor}}>
          {this.hasText()}
          <div style={{ textAlign: 'center' }}>
            {this.state.response
              ? 
              <div className="Countdown">
                <span className="Countdown-col">
                  <span className="Countdown-col-element">
                    <strong style={this.textStyle()}>{this.addLeadingZeros(countDown.days)}</strong>
                    <span  style={this.textStyle()}>{countDown.days === 1 ? 'روز' : 'روز'}</span>
                  </span>
                </span>

                <span className="Countdown-col">
                  <span className="Countdown-col-element">
                    <strong style={this.textStyle()}>{this.addLeadingZeros(countDown.hours)}</strong>
                    <span style={this.textStyle()}>ساعت</span>
                  </span>
                </span>


                <span className="Countdown-col">
                  <span className="Countdown-col-element">
                    <strong style={this.textStyle()}>{this.addLeadingZeros(countDown.min)}</strong>
                    <span style={this.textStyle()}>دقیقه</span>
                  </span>
                </span>

                <span className="Countdown-col">
                  <span className="Countdown-col-element">
                    <strong style={this.textStyle()}>{this.addLeadingZeros(countDown.sec)}</strong>
                    <span style={this.textStyle()}>ثانیه</span>
                  </span>
                </span>
              </div>
              : <p>Loading...</p>}
          </div>
        </div>
      </a>
    );
  }
}



export default PreOrderAnnounce;