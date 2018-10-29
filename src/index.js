import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import selectButton from './reducers/selectButton';
import { createStore } from 'redux';

const store = createStore( selectButton );
console.log('store created', store);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
