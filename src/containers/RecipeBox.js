import React from 'react';
import { connect } from 'react-redux';
import { selectRecipe, addRecipe, changeView } from '../actions/index';
import { bindActionCreators } from 'redux';

// import all view constants
import {
  NEW_RECIPE_VIEW,
  EDIT_RECIPE_VIEW
} from '../constants/view-keys';

import IngredientList from '../components/IngredientList';

class RecipeBox extends React.Component {

  handleClick_RecipeTitle = (event) => {
    // return a copy of the selcted recipe object
    const getCopyOfSelectedRecipeObject = () => {
      const selectedRecipeTitle = event.target.id;

      const recipeObject = this.props.recipes.find( recipe => {
        return recipe.title === selectedRecipeTitle;
      });
      return recipeObject;
    }

    this.props.selectRecipe(getCopyOfSelectedRecipeObject());
  }

  handleClick_NewRecipeButton = () => {

    this.props.changeView(NEW_RECIPE_VIEW);
  }

  handleClick_EditRecipeButton = () => {
    this.props.changeView(EDIT_RECIPE_VIEW);
  }

  // when the close button is pressed, an empty
  // object is passed to selectRecipe action creator,
  // deselecting any recipe
  handleClick_CloseButton = () => {
    this.props.selectRecipe({});
  }

  render() {


  // take the array of recipes from the store and map each recipe title
  // to new array of <li> elements
  // If recipe.title === selectedRecipe, display a list of
  // ingredients under the title
  const listItems = this.props.recipes.map( (recipe) => {
    return (
      <div key={recipe.title}>
        <li
          id={recipe.title}
          className="recipe-title"
          onClick={this.handleClick_RecipeTitle}>{recipe.title}
        </li>
        {/* TODO: Add transition here */}
        {recipe.title === this.props.selectedRecipe.title
          ? <IngredientList
            changeView={this.handleClick_EditRecipeButton}
            closeList={this.handleClick_CloseButton}
            recipes={this.props.recipes}
            selectedRecipe={this.props.selectedRecipe}
            />
          : null}
        {/*}{recipe.title === this.props.selectedRecipe
          ? ingredientBox
          : null}*/}
      </div>
    );
  });

  return (
    <div className="recipe-box">
      <h3>Recipes</h3>
      <button onClick={this.handleClick_NewRecipeButton}>New Recipe</button>
      {this.props.recipes.length === 0
        ? <h4>Click 'New Recipe' to begin adding recipes</h4>
        : null}
      <ul>
        {listItems}
    </ul>
  </div>
  );
  }
}

// maps state to this.props
function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe
  }
}
// maps actions to this.props
function mapDispatchToProps(dispatch) {
  // returns a bound function on this.props that will be sent to all reducers
  return bindActionCreators({
    selectRecipe: selectRecipe,
    addRecipe: addRecipe,
    changeView: changeView
  }, dispatch);
}

// make RecipeBox a container that is aware of redux
export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
