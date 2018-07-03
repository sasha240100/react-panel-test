import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'antd/dist/antd.css';
import './index.global.scss';

import App from './containers/App.jsx';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
