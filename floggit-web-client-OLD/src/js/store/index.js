import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import { startNoteSocket, startWhiteboardSocket } from '../actions';

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,
    logger
));

store.dispatch(startNoteSocket());
// store.dispatch(startWhiteboardSocket());

export default store;
