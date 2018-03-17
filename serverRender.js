import React from 'react';
import axios from 'axios';
import config from './config';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

const getApiUrl = content =>{
  console.log(config.serverUrl + '/api/static/main/landing-pages/' + content);
  if(content){
    return config.serverUrl + '/api/static/main/landing-pages/' + content;
  }
  return config.serverUrl + '/api/static/main/headers';
};

const getInitialData = (content, apiData) => {
  if(content){
    if(content === 'pre-order'){
      let preOrder = apiData['content'];
      let currentContentId;
      console.log(preOrder);
      if(!preOrder.id){
        currentContentId = null;
      } else {
        currentContentId = preOrder.id;
      }
      let data = {
        currentContentId,
        preOrder,
        headers: apiData.headers
      };
      console.log(data);
      return data;
    }
    return {
      headers: apiData.headers,
      currentContentId: null,
      preOrder: null
    };
  }

  return {
    headers: apiData.headers,
    isMainPage: true
  };
};


const serverRender = (content) => {
  return axios.get(getApiUrl(content))
    .then(res => {
      const initialData = getInitialData(content, res.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    })
    .catch(console.error);
};

export default serverRender;