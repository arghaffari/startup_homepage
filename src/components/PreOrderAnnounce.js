import React, { Component } from 'react';
import config from '../../config';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';



class PreOrderAnnounce extends Component {
  state = {
    endpoint: config.serverUrl,
    response: 'false',
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
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

  render() {
    const countDown = this.state;
    return (
      <div className="pre-order">
        <p>حداقل 80٪ تخفیف پیش فروش دخلتو فقط تاپایان فروردین و به تعداد محدود</p>
        <div style={{ textAlign: 'center' }}>
          {this.state.response
            ? 
            <div className="Countdown">
              <span className="Countdown-col">
                <span className="Countdown-col-element">
                  <strong>{this.addLeadingZeros(countDown.days)}</strong>
                  <span>{countDown.days === 1 ? 'روز' : 'روز'}</span>
                </span>
              </span>

              <span className="Countdown-col">
                <span className="Countdown-col-element">
                  <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                  <span>ساعت</span>
                </span>
              </span>


              <span className="Countdown-col">
                <span className="Countdown-col-element">
                  <strong>{this.addLeadingZeros(countDown.min)}</strong>
                  <span>دقیقه</span>
                </span>
              </span>

              <span className="Countdown-col">
                <span className="Countdown-col-element">
                  <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                  <span>ثانیه</span>
                </span>
              </span>
            </div>
            : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}


export default PreOrderAnnounce;