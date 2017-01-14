import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style/App.css';

// import all view constants

import {
  MAIN_VIEW,
  NEW_RECIPE_VIEW,
  EDIT_RECIPE_VIEW
 } from '../constants/view-keys';

import RecipeBox from '../containers/RecipeBox';
import NewRecipe from '../containers/NewRecipe';
import EditRecipe from './EditRecipe';


// import recipesReducer from './reducers/reducer-recipes';
// import viewReducer from './reducers/reducer-view';
// import reducers from '../reducers/combined-reducers';
import { selectRecipe, addRecipe } from '../actions/index';

// store.dispatch({type: "ADD_RECIPE", payload: 0});
// store.dispatch({type: "CHANGE_VIEW", payload: 20});
// store.dispatch({type: "DEC", payload: 1400});

class App extends Component {


  render() {
    console.log(this.props.view);
    return (
      <div className="App">
        <div className="App-header">

          <h2 >The Recipe Box</h2>
        </div>
        <p className="App-intro">
          Add recipes and stuff
        </p>
        <p>Current View = {this.props.view}</p>
        {this.props.view == 'NEW_RECIPE_VIEW' ? <NewRecipe /> : null}
        {this.props.view == 'EDIT_RECIPE_VIEW' ? <EditRecipe /> : null}

        <RecipeBox />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
}

export default connect(mapStateToProps)(App);
