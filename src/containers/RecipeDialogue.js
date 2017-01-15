import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addNewRecipe,
  changeView,
  deleteRecipe,
  editRecipe
 } from '../actions/index';
import {
  MAIN_VIEW,
  NEW_RECIPE_VIEW,
  EDIT_RECIPE_VIEW
 } from '../constants/view-keys';

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);

    // this will store what the user currently has written in
    // the recipe title and ingredients field
    if (this.props.view === EDIT_RECIPE_VIEW) {
      // populate the edit dialogue box with title and
      // ingredients for editing
      this.state = {
        title: this.props.selectedRecipe.title,
        ingredients: this.props.selectedRecipe.ingredients.join(", ")
      };
    } else {
      this.state = {
        title: "",
        ingredients: ""
      };
    }
  }

  // function will handle when the Add Recipe button is clicked
  // the current state of the component will send a new recipe
  // object back up to its parent to be added to the store
  handleAdd = () => {
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

    // changes view back to main, hiding the add new recipe box
    this.props.changeView(MAIN_VIEW);

  }

  // call the action creator with an object that describes the
  // updated values along with the title of the original recipe
  handleEdit = () => {
    console.log('edit selected');
    this.props.editRecipe({
      newTitle: this.state.title,
      newIngredients: this.state.ingredients.split(/,\s*/),
      originalTitle: this.props.selectedRecipe.title
    })

    // return to main view after editing
    this.props.changeView(MAIN_VIEW);

  }


  handleDelete = () => {
    // TODO: complete this handler, call action creator

    this.props.deleteRecipe(this.props.selectedRecipe);
    console.log('delete selected');

    // revert back to main view after deletion
    this.props.changeView(MAIN_VIEW);
  }

  handleCancel = () => {
    this.setState({
      title: "",
      ingredients: ""
    });

    // changes view back to main, hiding the add new recipe box
    this.props.changeView(MAIN_VIEW);
    // change view to make the box invisible
  };

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      // calls the handleAddNewRecipe function if user presses
      // enter in either of the input fields
      this.handleAdd();
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

      default:
        break;
    }

  }





  render() {



    return (
      <div className="new-recipe-box">
        <div className="dialogue-box">
          {this.props.view === NEW_RECIPE_VIEW
            ? <h3>Add a New Recipe</h3>
            : <h3>Edit This Recipe</h3>
          }


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
          <div className="button-container">
            {this.props.view === NEW_RECIPE_VIEW
              ? <button onClick={this.handleAdd}>Add</button>
              : <button onClick={this.handleEdit}>Edit</button>
            }
            {this.props.view === EDIT_RECIPE_VIEW
              ? <button onClick={this.handleDelete}>Delete</button>
              : null
            }
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      </div>

  );

  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    view: state.view,
    selectedRecipe: state.selectedRecipe
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNewRecipe: addNewRecipe,
    changeView: changeView,
    deleteRecipe: deleteRecipe,
    editRecipe: editRecipe
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
