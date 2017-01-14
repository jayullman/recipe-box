import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers/combined-reducers';
import App from './App';
import './style/index.css';


const store = createStore(reducers);

store.subscribe( () => {
  console.log("store changed", store.getState());

});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
