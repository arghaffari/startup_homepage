import React from 'react';
import axios from 'axios';

export const fetchHeaderList = () => {
  return axios.get('/api/static/main')
    .then(res => res.data.headers);
};

export const fetchHeader = headerId => {
  return axios.get('/api/static/main/' + headerId)
    .then(res => res.data);
};