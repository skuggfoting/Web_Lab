import React from 'react';

const NoteItem = (props) => {
  function handleDelete() {
    props.onRemove(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id);
  }

  if (props.isVisible && props.title !== undefined) {
    let classNameColor = 'panel-body note ';
    classNameColor += props.color;
    console.log(props);
    return (
      <div className={classNameColor}>
        <p className="title">{ props.title }</p>
        <p className="description">{ props.description }</p>
        <div className="col-lg-10 col-lg-offset-2">
          <span className="label label-default">{ props.date }</span>
          <button
            className="edit-button btn btn-default btn-xs"
            onClick={handleEdit}
          >Edit</button>
          <button
            className="delete-button btn btn-danger btn-xs"
            onClick={handleDelete}
          >Delete</button>
        </div>
      </div>
  );
  }
  return null;
};

NoteItem.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  color: React.PropTypes.string,
  date: React.PropTypes.number,
  onEdit: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  isVisible: React.PropTypes.bool
});

const NoteList = props => (<ul className="list-group">{
    props.notes.map(noteItem => (
      <NoteItem
        key={noteItem.id}
        id={noteItem.id}
        title={noteItem.title}
        description={noteItem.description}
        color={noteItem.color}
        date={noteItem.date}
        onEdit={props.onEdit}
        onRemove={props.onRemove}
        isVisible={props.isVisible}
        onClick={props.onClick}
      />
  )).reverse()
}</ul>);

NoteList.propTypes = () => ({
  notes: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      color: React.PropTypes.string,
      date: React.PropTypes.number
    })
  ),
  onEdit: React.PropTypes.func,
  onRemove: React.PropTypes.func
});

export default NoteList;
