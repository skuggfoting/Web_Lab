import React from 'react';
import { connect } from 'react-redux';
import { saveNote, startEdit, stopEdit, updateNote, removeNote, clearAdd, setAdd, clearError } from '../actions';
import NoteAdd from './note-add';
import NoteInput from './note-input';
import NoteEdit from './note-edit';
import NoteError from './note-error';
import NoteList from './note-list';

const NoteContainer = (props) => {
  console.log(props.params.whiteboard);
  return (
    <div className="note-container">
      <NoteAdd
        isVisible={props.displayAdd}
        onClick={props.handleAdd}
      />
      <NoteError
        isVisible={props.displayError}
        errorText={props.errorText}
        onHideError={props.handleHideError}
      />
      <NoteInput
        onAdd={props.handleSave}
        isVisible={!props.displayAdd}
        note={props.editNote}
        notes={props.whiteboards}
        onClick={props.handleCancel}
        whiteboard={props.params.whiteboard}
      />
      <NoteEdit
        onAdd={props.handleSaveEdit}
        isVisible={!props.displayAdd}
        note={props.editNote}
        onClick={props.handleCancel}
        onRemove={props.handleRemove}
      />
      <NoteList
        isVisible={props.displayAdd}
        notes={props.notes}
        onEdit={props.handleEdit}
        onRemove={props.handleRemove}
      />
    </div>
);
};

NoteContainer.propTypes = () => ({
  displayAdd: React.PropTypes.bool,
  displayError: React.PropTypes.bool,
  errorText: React.PropTypes.string,
  notes: React.PropTypes.array,
  whiteboards: React.PropTypes.obj,
  editNote: React.PropTypes.array,
  handleHideError: React.PropTypes.func.isRequired,
  handleAdd: React.PropTypes.func.isRequired,
  handleSave: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleSaveEdit: React.PropTypes.func.isRequired,
  handleCancel: React.PropTypes.func.isRequired
});

const mapStateToProps = state => ({
  whiteboards: state.whiteboards.filter(whiteboard => whiteboard.id !== state.edit),
  notes: state.notes.filter(note => note.id !== state.edit),
  editNote: state.notes.filter(note => note.id === state.edit),
  displayAdd: state.add.showAdd,
  displayError: state.error.hasError,
  errorText: state.error.errorMessage
});

const mapDispatchToProps = dispatch => ({
  handleAdd: () => {
    dispatch(clearAdd());
  },
  handleCancel: () => {
    dispatch(stopEdit());
    dispatch(setAdd());
  },
  handleSave: (id, title, description, color) => {
    const whiteboard = { title, description, color, date: (new Date().toDateString()) };
    dispatch(saveNote(id, whiteboard));
  },
  handleEdit: (id) => {
    dispatch(startEdit(id));
    dispatch(clearAdd());
  },
  handleSaveEdit: (id, title, description, color) => {
    const note = { title, description, color, date: (new Date().toDateString()) };
    dispatch(updateNote(id, note));
  },
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleHideError: () => {
    dispatch(clearError());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
