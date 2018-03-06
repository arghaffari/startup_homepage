import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import { LocaleProvider } from 'antd';
import faIR from 'antd/lib/locale-provider/fa_IR';


hydrate(
  <LocaleProvider locale={faIR}>
    <App initialData={window.initialData}/></LocaleProvider>,
  document.getElementById('root')
  
);
 

