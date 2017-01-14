import { ADD_RECIPE } from './action-keys';



export const selectRecipe = (recipe) => {
  console.log('hiiiii');
  return {type: 't'};
}


export const addNewRecipe = (recipe) => {
  console.log('Adding new recipe: ', recipe)
  return {
    type: ADD_RECIPE,
    payload: recipe
  };
}
