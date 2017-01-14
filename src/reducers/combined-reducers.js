import { combineReducers } from 'redux';
import recipesReducer from './reducer-recipes';
import viewReducer from './reducer-view';

export default combineReducers({
  recipes: recipesReducer,
  view: viewReducer
});
