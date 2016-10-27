import React from 'react';

const NoteError = (props) => {
  if (props.isVisible) {
    return (
      <div className="alert alert-dismissible alert-danger note-error">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={props.onHideError}
        >&times;</button>
        <strong>{props.errorText}</strong>
      </div>
    );
  }
  return null;
};

NoteError.propTypes = () => ({
  isVisible: React.PropTypes.bool.isRequired,
  errorText: React.PropTypes.text,
  onHideError: React.PropTypes.func
});

export default NoteError;
