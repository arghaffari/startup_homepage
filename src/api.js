import React from 'react';
import axios from 'axios';

export const fetchHeaderList = () => {
  return axios.get('/api/static/main')
    .then(res => res.data.headers);
};

export const fetchContent = contentId => {
  return axios.get('/api/static/main/landing-pages/' + contentId)
    .then(res => res.data);
};