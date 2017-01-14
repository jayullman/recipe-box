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

  return (
    <div className="recipe-box">
      <h3>Recipes</h3>
      <ul>
        <RecipeTitles />
        <li
          
          onClick={this.handleClick}>Test Recipe Title (hard-coded)</li>
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
