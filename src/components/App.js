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
import RecipeDialogue from '../containers/RecipeDialogue';



class App extends Component {


  render() {
    return (
      <div
        className="App"
        style={this.props.view !== MAIN_VIEW
          ? {backgroundColor: 'rgb(150, 150, 150)'}
          : null}>
        <div className="App-header">

          <h2 >The Recipe Box</h2>
        </div>
        <p className="App-intro">
          Add recipes and stuff
        </p>
        <p>Current View = {this.props.view}</p>
        {this.props.view === NEW_RECIPE_VIEW
          || this.props.view === EDIT_RECIPE_VIEW
            ? <RecipeDialogue propTest={true} />
            : null}
        {/*{this.props.view == EDIT_RECIPE_VIEW ? <EditRecipe /> : null}*/}

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
