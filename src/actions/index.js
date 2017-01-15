// Action Creators
// these objects get sent to the reducers via dispatch

import {
  ADD_RECIPE,
  EDIT_RECIPE,
  SELECT_RECIPE,
  CHANGE_VIEW,
  DELETE_RECIPE,
  ADD_FROM_LOCAL_STORAGE
} from '../constants/action-keys';

export const selectRecipe = (recipeObject) => {
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

export const addFromLocalStorage = (recipes) => {
  return {
    type: ADD_FROM_LOCAL_STORAGE,
    payload: recipes
  };
}


export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    payload: view
  }
}

export const editRecipe = (updateObj) => {
  return {
    type: EDIT_RECIPE,
    newTitle: updateObj.newTitle,
    newIngredients: updateObj.newIngredients,
    originalTitle: updateObj.originalTitle
  };
}

export const deleteRecipe = (recipe) => {
  return {
    type: DELETE_RECIPE,
    payload: recipe.title
  };
}
