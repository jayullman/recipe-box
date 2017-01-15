import { SELECT_RECIPE } from '../constants/action-keys';

// this reducer will return the title of the selected recipe
export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.payload;

    default:
        return state;

  }
};
