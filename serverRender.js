import React from 'react';
import axios from 'axios';
import config from './config';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

const getApiUrl = headerId =>{
//   console.log(config.serverUrl + '/api/contests/' + headerId);
//   if(headerId){
//     return config.serverUrl + '/api/contests/' + headerId;
//   }
  return config.serverUrl + '/api/static/main';
};

const getInitialData = (headerId, apiData) => {
  // if(headerId){
  //   return {
  //     currentheaderId: apiData.id,
  //     contests: {
  //       [apiData.id]: apiData
  //     }
  //   };
  // }

  return {
    headers: apiData.headers
  };
};


const serverRender = (headerId) => {
  return axios.get(getApiUrl(headerId))
    .then(res => {
      const initialData = getInitialData(headerId, res.data);
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