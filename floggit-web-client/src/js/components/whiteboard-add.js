import React from 'react';

const StartAdd = (props) => {
  function handleClick() {
    props.onClick(props.isVisible);
  }

  if (props.isVisible) {
    return (
      <div className="note-container">
        <h2>FloggIt</h2>
        <button
          type="button"
          id="button"
          className="btn btn-primary"
          onClick={handleClick}
        >Add Whiteboard</button>
      </div>
  );
  }
  return null;
};

StartAdd.propTypes = () => ({
  isVisible: React.PropTypes.bool.isRequired
});

export default StartAdd;
