import {
  ADD_RECIPE,
  SELECT_RECIPE
} from './action-keys';



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
