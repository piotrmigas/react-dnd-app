import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions/taskActions";

const Task = ({ listId, task, index }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [title, setTitle] = React.useState(task.title);
  const [content, setContent] = React.useState(task.content);

  const dispatch = useDispatch();

  const saveTask = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Tytuł wymagany!");
    } else {
      dispatch(updateTask(task.id, listId, title, content));
      setIsEditing(false);
    }
  };

  return isEditing ? (
    <form>
      <div className="card mb-3 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-10">
              <h5 className="card-title">
                <input
                  name="title"
                  autoComplete="off"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Wpisz tytuł..."
                />
              </h5>
              <h6 className="card-subtitle text-muted">
                <textarea
                  rows="3"
                  cols="25"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Tutaj wpisz opis..."
                />
              </h6>
            </div>
            <div className="col-sm-2">
              <i className="fas fa-check-circle float-right" onClick={saveTask} />
              <i className="fas fa-times-circle float-right" onClick={() => setIsEditing(false)} />
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div className="card mb-3" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-10">
                <h5 className="card-title font-weight-bold">{task.title}</h5>
                <h6 className="card-subtitle">{task.content}</h6>
              </div>
              <div className="col-sm-2">
                {task.icon}
                <i className="far fa-edit edit float-right pt-3" onClick={() => setIsEditing(true)} />
                <i
                  className="fas fa-trash float-right pt-3 pr-1"
                  onClick={() => dispatch(deleteTask(task.id, listId))}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
