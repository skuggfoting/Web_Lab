import { CLEAR_ADD, SET_ADD } from '../constants/action-types';

const initialState = {
  showAdd: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD: {
      return Object.assign({}, initialState);
    }
    case CLEAR_ADD: {
      return { showAdd: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
