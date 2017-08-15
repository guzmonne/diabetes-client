import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

registerServiceWorker();
