import React, { Component } from 'react';

import { connect } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Test from './test.js';

//
// import recipesReducer from './reducers/reducer-recipes';
// import viewReducer from './reducers/reducer-view';
// import reducers from './reducers/combined-reducers';





//
// store.dispatch({type: "ADD_RECIPE", payload: 0});
// store.dispatch({type: "CHANGE_VIEW", payload: 20});
// store.dispatch({type: "DEC", payload: 1400});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        <Test />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
