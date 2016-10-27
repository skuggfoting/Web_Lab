import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import NoteContainer from './components/note-container';
import WhiteboardContainer from './components/whiteboard-container';

const myWhiteboardApp = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={WhiteboardContainer} />
      <Route path="/:whiteboard" component={NoteContainer} />
    </Router>
  </Provider>
);

ReactDOM.render(myWhiteboardApp, document.querySelector('#application'));
