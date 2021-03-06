import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FormProvider from '../FormProvider';

ReactDOM.render(
(
  <FormProvider>
    <App />
  </FormProvider>
)
,document.getElementById('root'));
registerServiceWorker();
