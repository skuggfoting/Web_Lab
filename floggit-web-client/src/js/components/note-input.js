import React from 'react';

const NoteInput = (props) => {
  let title;
  let description;
  let color;

  function saveNote() {
    const noteTitle = title.value.trim();
    const noteDescription = description.value.trim();
    const noteColor = color.value;
    const noteWhiteboard = props.whiteboard;
    console.log(props);

    // if (noteTitle.length > 0) {
    props.onAdd(noteTitle, noteDescription, noteColor, noteWhiteboard);
    // }
  }

  function handleCancel() {
    props.onClick(props.isVisible);
  }

  function handleSave() {
    saveNote();
    props.onClick(props.isVisible);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSave();
    }
  }

  if (props.isVisible && props.note[0] === undefined) {
    return (
      <form className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
            <div className="col-lg-10">
              <input
                autoFocus
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
            <label
              htmlFor="description"
              className="col-lg-2 control-label"
            >Description</label>
            <div className="col-lg-10">
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                ref={(c) => { description = c; }}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="col-lg-2 control-label">Color</label>
            <div className="col-lg-10">
              <select
                defaultValue="blue"
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

NoteInput.propTypes = () => ({
  isVisible: React.PropTypes.bool.isRequired
});

export default NoteInput;
