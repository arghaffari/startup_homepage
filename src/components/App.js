import React from 'react';
import Header from './Header';
import * as api from '../api';
import PropTypes from 'prop-types';
import Main from './Main';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

const onPopState = handler => {
  window.onpopstate = handler;
};


class App extends React.Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired
  }
  state = this.props.initialData;
  

  componentDidMount(){
    onPopState((event) => {
      this.setState({
        // currentHeaderId: (event.state || {}).currentHeaderId
      });      
    });
  }

  componentWillUnmount(){
    onPopState(null);
  }

  fetchHeaderList = () => {

    pushState({
      currentHeaderId: null
    },
    '/'
    );

    api.fetchHeaderList().then(headers => {
      this.setState({
        currentHeaderId: null,
        headers
      });
    });
	
  };

  fetchContest = (headerId) => {

    pushState({
      currentHeaderId: headerId
    },
    '/header/'+ headerId
    );

    api.fetchContest(headerId).then(header => {
      this.setState({
        currentContestId: header.id,
        contests: {
          ...this.state.headers,
          [header.id]: header
        }
      });
    });
	
  };

  getHeaders(){
    return this.state.headers;
  }

  getMainContents(){
    return this.state.main;
  }

  render(){
    return (
      <div>
        <div className="backg" />
        <Header headers={this.getHeaders()} />
        <Main mainContent={this.getMainContents()}/>
      </div>
    );
  }
}


export default App;