import { CHANGE_VIEW } from '../constants/action-keys';
import { MAIN_VIEW } from '../constants/view-keys';

export default (state = MAIN_VIEW, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.payload;

    default:
      return state;
  }

};
