import React from 'react';
import { connect } from 'react-redux';
import { selectRecipe, addRecipe, changeView } from '../actions/index';
import { bindActionCreators } from 'redux';

// import all view constants
import { MAIN_VIEW, NEW_RECIPE_VIEW } from '../constants/view-keys';

import RecipeTitles from '../components/RecipeTitles';

class RecipeBox extends React.Component {

  handleClick_RecipeTitle = (event) => {
    console.log('in handle click: ', event.target.id);
    this.props.selectRecipe(event.target.id);
  }

  handleClick_NewRecipeButton = () => {
    console.log('in handleclick');

    this.props.changeView("NEW_RECIPE_VIEW");
  }

  render() {
    let ingredientBox = null;

    // if a recipe is selected, create an array of <li> elements
    if (this.props.selectedRecipe) {
      // return the appropriate recipe
      const currentRecipe = this.props.recipes.find( (recipe) => {
        return recipe.title === this.props.selectedRecipe;
      });
      // create a mapped array of <li> elements
      const ingredientsArray = currentRecipe.ingredients.map( (ingredient) => {
        return (
          <li key={ingredient}>{ingredient}</li>
        );
      })

      // this element will be displayed underneath the currently
      // selected recipe within the <ul> list
      ingredientBox = (
        <div className="ingredient-box">
          {ingredientsArray}
        </div>
      );

    }



  // take the array of recipes from the store and map each recipe title
  // to new array of <li> elements
  // If recipe.title === selectedRecipe, display a list of
  // ingredients under the title
  const listItems = this.props.recipes.map( (recipe) => {
    return (
      <div key={recipe.title}>
        <li
          id={recipe.title}

          onClick={this.handleClick_RecipeTitle}>{recipe.title}
        </li>
        {recipe.title === this.props.selectedRecipe
          ? ingredientBox
          : null}
      </div>
    );
  });

  return (
    <div className="recipe-box">
      <h3>Recipes</h3>
      <button onClick={this.handleClick_NewRecipeButton}>New Recipe</button>
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
