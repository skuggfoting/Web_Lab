import { combineReducers } from 'redux';
import add from './add';
import notes from './notes';
import whiteboards from './whiteboards';
import edit from './edit';
import error from './error';
import services from './services';

const reducer = combineReducers({
  add,
  notes,
  whiteboards,
  edit,
  error,
  services
});

export default reducer;
