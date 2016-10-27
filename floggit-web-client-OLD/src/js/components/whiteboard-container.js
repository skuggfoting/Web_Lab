import React from 'react';
import { connect } from 'react-redux';
import { saveWhiteboard, startEdit, stopEdit, updateWhiteboard, removeWhiteboard, clearAdd, setAdd, clearError } from '../actions';
import WhiteboardAdd from './whiteboard-add';
import WhiteboardInput from './whiteboard-input';
import WhiteboardEdit from './whiteboard-edit';
import WhiteboardError from './whiteboard-error';
import WhiteboardList from './whiteboard-list';

const WhiteboardContainer = props => (
  <div className="whiteboard-container">
    <WhiteboardAdd
      isVisible={props.displayAdd}
      onClick={props.handleAdd}
    />
    <WhiteboardError
      isVisible={props.displayError}
      errorText={props.errorText}
      onHideError={props.handleHideError}
    />
    <WhiteboardInput
      onAdd={props.handleSave}
      isVisible={!props.displayAdd}
      whiteboard={props.editWhiteboard}
      onClick={props.handleCancel}
    />
    <WhiteboardEdit
      onAdd={props.handleSaveEdit}
      isVisible={!props.displayAdd}
      whiteboard={props.editWhiteboard}
      onClick={props.handleCancel}
      onRemove={props.handleRemove}
    />
    <WhiteboardList
      isVisible={props.displayAdd}
      whiteboards={props.whiteboards}
      onEdit={props.handleEdit}
      onRemove={props.handleRemove}
    />
  </div>
 );

WhiteboardContainer.propTypes = () => ({
  displayAdd: React.PropTypes.bool,
  displayError: React.PropTypes.bool,
  errorText: React.PropTypes.string,
  whiteboards: React.PropTypes.array,
  editWhiteboard: React.PropTypes.array,
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
  editWhiteboard: state.whiteboards.filter(whiteboard => whiteboard.id === state.edit),
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
  handleSave: (title, color) => {
    const whiteboard = { title, color };
    dispatch(saveWhiteboard(whiteboard));
  },
  handleEdit: (id) => {
    dispatch(startEdit(id));
    dispatch(clearAdd());
  },
  handleSaveEdit: (id, title, color) => {
    const whiteboard = { title, color };
    dispatch(updateWhiteboard(id, whiteboard));
  },
  handleRemove: (id) => {
    dispatch(removeWhiteboard(id));
  },
  handleHideError: () => {
    dispatch(clearError());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
