import { CHANGE_VIEW } from '../constants/action-keys';
import { MAIN_VIEW } from '../constants/view-keys';

export default (state = "", action) => {
  switch (action.type) {
    case CHANGE_VIEW:
    console.log('in changeview reducer');
      return action.payload;

    default:
      return state;
  }

};
