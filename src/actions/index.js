import {
  ADD_RECIPE,
  SELECT_RECIPE,
  CHANGE_VIEW
} from '../constants/action-keys';



export const selectRecipe = (recipeTitle) => {
  console.log('selectRecipe Action fired with: ', recipeTitle);
  return {
    type: SELECT_RECIPE,
    payload: recipeTitle
  };
}


export const addNewRecipe = (recipe) => {
  console.log('Adding new recipe: ', recipe)
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
