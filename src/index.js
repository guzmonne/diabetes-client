import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.js';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
