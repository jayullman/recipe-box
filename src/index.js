import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers/combined-reducers';
import App from './components/App';
import './style/index.css';


// Redux section
const store = createStore(reducers);

// maybe use to update local storage?

store.subscribe( () => {
  console.log("store changed", store.getState());
});
// end Redux section


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
