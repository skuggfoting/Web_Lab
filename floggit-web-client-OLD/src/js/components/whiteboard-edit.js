import React from 'react';

const WhiteboardInput = (props) => {
  let title;
  let color;

  function updateWhiteboard() {
    const whiteboardId = props.whiteboard[0].id;
    const whiteboardTitle = title.value.trim();
    const whiteboardColor = color.value;

    if (whiteboardTitle.length > 0) {
      props.onAdd(whiteboardId, whiteboardTitle, whiteboardColor);
    }
  }

  function handleCancel() {
    props.onClick(props.isVisible);
  }

  function handleSave() {
    updateWhiteboard();
    props.onClick(props.isVisible);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSave();
    }
  }

  if (props.isVisible && props.whiteboard[0] !== undefined) {
    return (
      <form className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
            <div className="col-lg-10">
              <input
                autoFocus
                defaultValue={props.whiteboard[0].title}
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Title"
                ref={(c) => { title = c; }}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="col-lg-2 control-label">Color</label>
            <div className="col-lg-10">
              <select
                defaultValue={props.whiteboard[0].color}
                className="form-control"
                id="color"
                ref={(c) => { color = c; }}
                onKeyDown={handleKeyDown}
              >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="red">Red</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >Save</button>
              <button
                type="reset"
                className="btn btn-default"
                onClick={handleCancel}
              >Cancel</button>
            </div>
          </div>
        </fieldset>
      </form>
  );
  }
  return null;
};

WhiteboardInput.propTypes = () => ({
  isVisible: React.PropTypes.bool.isRequired,
  onRemove: React.PropTypes.func
});

export default WhiteboardInput;
