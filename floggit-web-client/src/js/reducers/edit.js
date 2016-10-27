import { START_EDIT, STOP_EDIT } from '../constants/action-types';

const reducer = (state = null, action) => {
  switch (action.type) {
    case START_EDIT: {
      return action.data;
    }
    case STOP_EDIT: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
