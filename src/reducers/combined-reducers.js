import { combineReducers } from 'redux';
import recipesReducer from './reducer-recipes';
import viewReducer from './reducer-view';
import selectRecipeReducer from './reducer-selectedRecipe';

export default combineReducers({
  recipes: recipesReducer,
  selectedRecipe: selectRecipeReducer,
  view: viewReducer
});
