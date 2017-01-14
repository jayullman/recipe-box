import React from 'react';
import { connect } from 'react-redux';
import { selectRecipe, addRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';

import RecipeTitles from '../components/RecipeTitles';

class RecipeBox extends React.Component {

  handleClick = () => {
    this.props.selectRecipe();
  }

  render() {

  // take the array of recipes from the store and map each recipe title
  // to new array of <li> elements
  const listItems = this.props.recipes.map( (recipe) => {
    return (
      <li
        key={recipe.title}
        onClick={this.handleClick}>{recipe.title}</li>
    );
  });

  return (
    <div className="recipe-box">
      <h3>Recipes</h3>
      <ul>
        {listItems}
    </ul>
  </div>
  );
  }
}

// maps state to this.props
function mapStateToProps(state) {
  return {recipes: state.recipes}
}
// maps actions to this.props
function mapDispatchToProps(dispatch) {
  // returns a bound function on this.props that will be sent to all reducers
  return bindActionCreators({
    selectRecipe: selectRecipe,
    addRecipe: addRecipe
  }, dispatch);
}

// make RecipeBox a container that is aware of redux
export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
