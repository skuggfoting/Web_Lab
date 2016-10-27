import React from 'react';

const WhiteboardError = (props) => {
  if (props.isVisible) {
    return (
      <div className="alert alert-dismissible alert-danger whiteboard-error">
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

WhiteboardError.propTypes = () => ({
  isVisible: React.PropTypes.bool.isRequired,
  errorText: React.PropTypes.text,
  onHideError: React.PropTypes.func
});

export default WhiteboardError;
