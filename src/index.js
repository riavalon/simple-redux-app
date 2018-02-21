import React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './app/app';
import {store} from './store';

import './index.html';
import './main.scss';


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
