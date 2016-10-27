import axios from 'axios';
import socketIOClient from 'socket.io-client';
import * as types from '../constants/action-types';

export const startEdit = id => ({
  type: types.START_EDIT,
  data: id
});
export const stopEdit = () => ({
  type: types.STOP_EDIT
});
export const updateAllNotes = notes => ({
  type: types.UPDATE_ALL_NOTES,
  data: notes
});
export const updateAllWhiteboards = whiteboards => ({
  type: types.UPDATE_ALL_WHITEBOARDS,
  data: whiteboards
});
export const setAdd = () => ({
  type: types.SET_ADD
});
export const clearAdd = () => ({
  type: types.CLEAR_ADD
});
export const setError = message => ({
  type: types.SET_ERROR,
  data: message
});
export const clearError = () => ({
  type: types.CLEAR_ERROR
});
export const setLoading = () => ({
  type: types.SET_LOADING
});
export const setLoaded = () => ({
  type: types.SET_LOADED
});

// export const getAll = () => (dispatch) => {
//   dispatch(setLoading());
//   return axios.get('http://localhost:8081/v1/notes')
//           .then((response) => {
//             const notes = response.data.map(item => ({
//               id: item.id,
//               title: item.item.title,
//               description: item.item.description,
//               color: item.item.color,
//               date: item.item.date
//             }));
//             dispatch(updateAllNotes(notes));
//             dispatch(setLoaded());
//           })
//           .catch(() => {
//             dispatch(setError('Could not get data from server.'));
//             dispatch(setLoaded());
//           });
// };

// Note
export const saveNote = note => (dispatch) => {
  dispatch(setLoading());
  let serverNote;
  if (note.title.length === 0) {
    dispatch(setError('Can not save note without title.'));
  } else {
    serverNote = {
      title: note.title,
      description: note.description,
      color: note.color,
      date: note.date,
      noteWhiteboard: note.noteWhiteboard
    };
    return axios.post('http://localhost:8081/v1/notes', serverNote)
          .then(() => {
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not save note to server.'));
            dispatch(setLoaded());
          });
  }
  return null;
};


export const updateNote = (id, note) => (dispatch) => {
  dispatch(setLoading());
  const serverNote = {
    title: note.title,
    description: note.description,
    color: note.color,
    date: note.date,
    noteWhiteboard: note.noteWhiteboard
  };
  return axios.put(`http://localhost:8081/v1/notes/${id}`, serverNote)
          .then(() => {
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not update note on server.'));
            dispatch(setLoaded());
          });
};

export const removeNote = id => (dispatch) => {
  dispatch(setLoading());
  return axios.delete(`http://localhost:8081/v1/notes/${id}`)
          .then(() => {
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not delete from server.'));
            dispatch(setLoaded());
          });
};

export const startNoteSocket = () => (dispatch) => {
  const socket = socketIOClient('http://localhost:8081');
  socket.on('note-update', (data) => {
    const notes = data.map(item => ({
      id: item.id,
      date: item.date,
      title: item.item.title,
      description: item.item.description,
      color: item.item.color,
      noteWhiteboard: item.item.noteWhiteboard
    }));
    dispatch(updateAllNotes(notes));
  });
};

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Whiteboard
export const saveWhiteboard = whiteboard => (dispatch) => {
  dispatch(setLoading());
  let serverWhiteboard;
  if (whiteboard.title.length === 0) {
    dispatch(setError('Can not save whiteboard without title.'));
  } else {
    serverWhiteboard = {
      title: whiteboard.title,
      color: whiteboard.color
    };
    return axios.post('http://localhost:8081/v1/whiteboards', serverWhiteboard)
          .then(() => {
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not save whiteboard to server.'));
            dispatch(setLoaded());
          });
  }
  return null;
};


export const updateWhiteboard = (id, whiteboard) => (dispatch) => {
  dispatch(setLoading());
  const serverWhiteboard = {
    title: whiteboard.title,
    color: whiteboard.color
  };
  return axios.put(`http://localhost:8081/v1/whiteboards/${id}`, serverWhiteboard)
          .then(() => {
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not update whiteboard on server.'));
            dispatch(setLoaded());
          });
};

export const removeWhiteboard = id => (dispatch) => {
  dispatch(setLoading());
  return axios.delete(`http://localhost:8081/v1/whiteboards/${id}`)
          .then(() => {
            dispatch(setLoaded());
          })
          .catch(() => {
            dispatch(setError('Could not delete from server.'));
            dispatch(setLoaded());
          });
};

export const startWhiteboardSocket = () => (dispatch) => {
  const socket = socketIOClient('http://localhost:8081');
  socket.on('whiteboard-update', (data) => {
    const whiteboards = data.map(item => ({
      id: item.id,
      title: item.item.title,
      color: item.item.color
    }));
    dispatch(updateAllWhiteboards(whiteboards));
  });
};
