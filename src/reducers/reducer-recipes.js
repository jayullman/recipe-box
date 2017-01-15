import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from '../constants/action-keys';

export default (state = [], action) => {
  let newRecipesArray;

  switch (action.type) {
    case ADD_RECIPE:
      // spreads state.recipes array into new array and
      // attaches the new recipe object on the end
      newRecipesArray = [...state, action.payload]
      return newRecipesArray;


      case EDIT_RECIPE:
      // filter every recipe that is not the
      console.log('made it to edit-recip action creator');
      return state;

    
    case DELETE_RECIPE:
    // find the recipe in the array, remove, and send
    // new array to store
    console.log('Before delete: ' + state)
    newRecipesArray = state.filter( recipe => {
      // if the recipe equals the passed in recipe title,
      // that object is not given to the new array
      console.log('recipe title: ', recipe.title);
      console.log('action payload: ', action.payload);

      return recipe.title !== action.payload
    });
    console.log('After delete: ' + newRecipesArray);

    return newRecipesArray;

    default:
        return state;

  }
};
