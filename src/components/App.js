import React from 'react';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import * as api from '../api';
import PropTypes from 'prop-types';
import Main from './Main';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

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
        <Layout>
          <HeaderContainer headers={this.getHeaders()} />
          <Content><Main mainContent={this.getMainContents()}/></Content>
          <Footer><FooterContainer /></Footer>
        </Layout>
        <div className="backg" />
      </div>
    );
  }
}


export default App;