import { SAVE_WHITEBOARD, REMOVE_WHITEBOARD, UPDATE_ALL_WHITEBOARDS } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_WHITEBOARD: {
      const whiteboard = Object.assign({}, action.data);
      return [...state, whiteboard];
    }
    case REMOVE_WHITEBOARD: {
      return state.filter(whiteboard => whiteboard.id !== action.data);
    }
    case UPDATE_ALL_WHITEBOARDS: {
      return [...action.data];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
