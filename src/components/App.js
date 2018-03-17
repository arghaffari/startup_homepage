import React from 'react';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import * as api from '../api';
import PropTypes from 'prop-types';
import Main from './Main';
import PreOrderAnnounce from './PreOrderAnnounce';
import PreOrder from './landing-pages/PreOrder';
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
        currentContentId: (event.state || {}).currentContentId
      });      
    });
  }

  componentWillUnmount(){
    onPopState(null);
  }

  fetchHeaderList = () => {
    pushState({
      currentContentId: null
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

  fetchContest = (contentId) => {
    pushState({
      currentContentId: contentId
    },
    '/pages/landing-page/'+ contentId
    );

    api.fetchContent(contentId).then(content => {
      this.setState({
        currentContentId: content.id,
        contests: {
          ...this.state.content,
          [content.id]: content
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


  currentContent(){
    if (this.state.currentContentId) {
      // return <Contest {...this.currentContest()} contestListClick={this.fetchContestList}/>;
      return (
        <Content><PreOrder/></Content>
      );
    }

    // return <ContestList 
    //   onContestClick={this.fetchContest}
    //   contests={this.state.contests}/>;
    if(this.state.isMainPage){
      return <Content><Main mainContent={this.getMainContents()}/></Content>;
    }
    
  }

  announcement(){
    if(this.state.isMainPage){
      return <PreOrderAnnounce />;
    }
  }

  render(){
    return (
      <div>
        <Layout>
          {this.announcement()}
          <HeaderContainer headers={this.getHeaders()} />
          {this.currentContent()}
        </Layout>
        <div className="backg" />
      </div>
    );
  }
}


export default App;