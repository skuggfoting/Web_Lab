import React from 'react';
import { Link } from 'react-router';

const WhiteboardItem = (props) => {
  function handleDelete() {
    props.onRemove(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id);
  }

  if (props.isVisible) {
    let classNameColor = 'panel-body note ';
    classNameColor += props.color;
    return (
      <div className={classNameColor}>
        <p className="title">{ props.title }</p>
        <div className="col-lg-10 col-lg-offset-2">
          <Link
            to={props.title}
            className="edit-button btn btn-default btn-xs"
          >Enter Whiteboard</Link>
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

WhiteboardItem.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  color: React.PropTypes.string,
  onEdit: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  isVisible: React.PropTypes.bool
});

const WhiteboardList = props => (<ul className="list-group">{
    props.whiteboards.map(whiteboardItem => (
      <WhiteboardItem
        key={whiteboardItem.id}
        id={whiteboardItem.id}
        title={whiteboardItem.title}
        color={whiteboardItem.color}
        onEdit={props.onEdit}
        onRemove={props.onRemove}
        isVisible={props.isVisible}
        onClick={props.onClick}
      />
  )).reverse()
}</ul>);

WhiteboardList.propTypes = () => ({
  whiteboards: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      color: React.PropTypes.string
    })
  ),
  onEdit: React.PropTypes.func,
  onRemove: React.PropTypes.func
});

export default WhiteboardList;
