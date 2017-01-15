// Action Creators
// these objects get sent to the reducers via dispatch

import {
  ADD_RECIPE,
  EDIT_RECIPE,
  SELECT_RECIPE,
  CHANGE_VIEW,
  DELETE_RECIPE
} from '../constants/action-keys';

export const selectRecipe = (recipeObject) => {
  console.log(recipeObject);
  return {
    type: SELECT_RECIPE,
    payload: recipeObject
  };
}

export const addNewRecipe = (recipe) => {
  return {
    type: ADD_RECIPE,
    payload: recipe
  };
}

export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    payload: view
  }
}

export const editRecipe = (recipe) => {
  return {
    type: EDIT_RECIPE,
    payload: recipe.title
  };
}

export const deleteRecipe = (recipe) => {
  console.log('!!! ', recipe)
  return {
    type: DELETE_RECIPE,
    payload: recipe.title
  };
}
