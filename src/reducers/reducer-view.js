import { SELECT_RECIPE } from '../actions/action-keys';


export default (state = "", action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.payload;


    default:
      return state;
  }

};
