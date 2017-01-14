import { ADD_RECIPE } from '../actions/action-keys';

export default (state = [], action) => {

  switch (action.type) {
    case ADD_RECIPE:
      // spreads state.recipes array into new array and
      // attaches the new recipe object on the end
      const newRecipesArray = [...state, action.payload]
      return newRecipesArray
      break;

    // TODO: make DELETE_RECIPE case
    case 'DELETE_RECIPE':
    break;

    default:
        return state;

  }
};
