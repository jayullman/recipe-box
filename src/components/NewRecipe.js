// this module will be invisible unless the
// selected by the currentView in the store

// box will remain visible during testing

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectRecipe, addNewRecipe } from '../actions/index';


import AddButton from './buttons/AddButton'
import CancelButton from './buttons/CancelButton'


class NewRecipe extends React.Component {
  constructor() {
    super();

    // this will store what the user currently has written in
    // the recipe title and ingredients field
    this.state = {
      title: "",
      ingredients: ""
    };
  }

  // function will handle when the Add Recipe button is clicked
  // the current state of the component will send a new recipe
  // object back up to its parent to be added to the store
  handleAddNewRecipe = () => {
    // this will take a string of ingredients and return an array of
    // each item. The regex splits based on comma, or comma-space
    const ingredients = this.state.ingredients.split(/,\s*/);

    // checks to make sure that both Title and Ingredients fields
    // are filled out
    if (this.state.ingredients === ""
      || this.state.title === "") {
      console.log('Both fields must be filled out');
      return;
      }

    // check to make sure that the recipe title is unique
    if (this.props.recipes.some( (recipe) => {
      return (this.state.title === recipe.title);
    })) {
      console.log("Title must be unique");
      return;
    }

    this.props.recipes.some( (recipe) => {
      return (this.state.title === recipe.title);
    })

    this.props.addNewRecipe({
      title: this.state.title,
      ingredients: ingredients
    });

    this.setState({
      title: "",
      ingredients: ""
    });
  }

  handleCancel = () => {
    this.setState({
      title: "",
      ingredients: ""
    });

    // change view to make the box invisible
  };

  handleKeyPress = (event) => {
    if (event.charCode == 13) {
      // calls the handleAddNewRecipe function if user presses
      // enter in either of the input fields
      this.handleAddNewRecipe();
    }
  }

  // functin will handle whenever the value of the form changes, ie
  // when the user types something in the field

  handleChange = (event) => {
    switch (event.target.id) {
      case 'title':
        this.setState({
          title: event.target.value
        });
        break;

      case 'ingredients':
        this.setState({
          ingredients: event.target.value
        });
        break;
    }

  }

  render() {
    return (
      <div className="new-recipe-box">
        <h3>Add a New Recipe (invisible)</h3>

        <h4>Recipe Title</h4>
        <input
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <h4>Ingredients</h4>
        <input
          id="ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <br/>
        <button onClick={this.handleAddNewRecipe}>Add</button>
        <button onClick={this.handleCancel}>Cancel</button>

      </div>

  );

  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    currentView: state.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNewRecipe: addNewRecipe
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
