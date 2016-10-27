import { SAVE_NOTE, REMOVE_NOTE, UPDATE_ALL_NOTES } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_NOTE: {
      const note = Object.assign({}, action.data);
      return [...state, note];
    }
    case REMOVE_NOTE: {
      return state.filter(note => note.id !== action.data);
    }
    case UPDATE_ALL_NOTES: {
      return [...action.data];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
