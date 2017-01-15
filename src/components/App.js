import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

import '../style/App.css';

// import all view constants
import {
  MAIN_VIEW,
  NEW_RECIPE_VIEW,
  EDIT_RECIPE_VIEW
 } from '../constants/view-keys';

import { addFromLocalStorage } from '../actions/index';

import RecipeBox from '../containers/RecipeBox';
import RecipeDialogue from '../containers/RecipeDialogue';


class App extends Component {


  // check localstorare, if the recipes key exists,
  // populate the store with the value
  componentWillMount() {
    if (localStorage.getItem('recipes') && localStorage.getItem('recipes') !== 'undefined') {
      const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
      if (storedRecipes.length > 0) {
        this.props.addInitialRecipes(storedRecipes);
      }
    }
  }

  render() {
    return (
      <div
        className="App"
        style={this.props.view !== MAIN_VIEW
          ? {backgroundColor: 'rgb(150, 150, 150)'}
          : null}>
        <Header />
        {this.props.view === NEW_RECIPE_VIEW
          || this.props.view === EDIT_RECIPE_VIEW
            ? <RecipeDialogue propTest={true} />
            : null}
        {/*{this.props.view == EDIT_RECIPE_VIEW ? <EditRecipe /> : null}*/}

        <RecipeBox />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addInitialRecipes: addFromLocalStorage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
