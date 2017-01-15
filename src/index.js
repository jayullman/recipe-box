import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers/combined-reducers';
import App from './components/App';
import './style/index.css';


// create REdux store
const store = createStore(reducers);

// Redux section

// maybe use to update local storage?
// let recipesArray = [];
// store.subscribe( () => {
//   console.log("store changed", store.getState());
//   recipesArray = store.getState().recipes;
//
//   // if there are any recipes in the users recipe box,
//   // update localstorage with the new array of recipes
//   if (recipesArray.length > 0) {
//     localStorage.setItem('recipes', JSON.stringify(recipesArray));
//   }
//
//   console.log('local storage: ', localStorage.getItem('recipes'));
//
// });


// end Redux section


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
