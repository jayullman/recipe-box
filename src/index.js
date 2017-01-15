import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers/combined-reducers';
import App from './components/App';
import './style/index.css';


// create REdux store
const store = createStore(reducers);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
