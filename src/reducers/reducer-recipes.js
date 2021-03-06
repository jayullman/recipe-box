import { ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  ADD_FROM_LOCAL_STORAGE
} from '../constants/action-keys';

export default (state = [], action) => {
  let newRecipesArray;

  switch (action.type) {
    case ADD_FROM_LOCAL_STORAGE:

      return action.payload;


    case ADD_RECIPE:
      // spreads state.recipes array into new array and
      // attaches the new recipe object on the end
      newRecipesArray = [...state, action.payload];

      // add recipe to localStorage
      localStorage.setItem('recipes', JSON.stringify(newRecipesArray));

      return newRecipesArray;


      case EDIT_RECIPE:
        /*
        {
          newTitle: updateObj.newTitle,
          newIngredients: updateObj.newIngredients,
          originalTitle: updateObj.originalTitle
        }
        */


      newRecipesArray = [...state];
      // find the index of the object to edit
      let index = newRecipesArray.map( recipe => {
        return recipe.title}).indexOf(action.originalTitle);

      newRecipesArray[index].title = action.newTitle;
      newRecipesArray[index].ingredients = action.newIngredients;
      return newRecipesArray;


    case DELETE_RECIPE:
    // find the recipe in the array, remove, and send
    // new array to store
    newRecipesArray = state.filter( recipe => {
      // if the recipe equals the passed in recipe title,
      // that object is not given to the new array

      // update localstorage
      localStorage.setItem('recipes', JSON.stringify(newRecipesArray));


      return recipe.title !== action.payload
    });

    return newRecipesArray;

    default:
        return state;

  }
};
