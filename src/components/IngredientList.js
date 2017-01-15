import React from 'react';


export default class IngredientList extends React.Component {


  render() {
  // if a recipe is selected, create an array of <li> elements
    if (this.props.selectedRecipe) {
      // return the appropriate recipe
      const currentRecipe = this.props.recipes.find( (recipe) => {
        return recipe.title === this.props.selectedRecipe.title;
      });
      // create a mapped array of <li> elements
      const ingredientsArray = currentRecipe.ingredients.map( (ingredient) => {
        return (
          <li
            key={ingredient}>{ingredient}
          </li>
        );
      })

      // this element will be displayed underneath the currently
      // selected recipe within the <ul> list

        return (
          <div className="ingredient-box">
            <h5 className="ingredients-title">Ingredients:</h5>
            <ul>
            {ingredientsArray}
            </ul>
            <button className="edit-recipe-button" onClick={this.props.changeView}>Edit This Recipe</button>
            <button className="edit-recipe-button" onClick={this.props.closeList}>Close</button>
          </div>
        );

    } else {
      return null;
    }

  }
}
