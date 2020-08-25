import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { v4 } from "uuid";

const AddTask = ({ list, listId }) => {
  const [formOpen, setFormOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Tytuł wymagany!");
    } else {
      const id = v4();
      const icon = (
        <i
          className={
            listId === "list-1" ? "far fa-edit" : listId === "list-2" ? "far fa-check-circle" : "far fa-circle"
          }
        />
      );
      dispatch(addTask(id, listId, title, content, icon));
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <div className="add-task">
        <div className="list-info">
          <h4>
            {list.title} <span>({list.tasks.length})</span>
          </h4>
        </div>
        <div className="button">
          <span className="badge" onClick={() => setFormOpen(!formOpen)}>
            Dodaj <i className={!formOpen ? "fas fa-plus" : "fas fa-minus"} />
          </span>
        </div>
      </div>
      <form className={formOpen ? "d-block" : "d-none"}>
        <div className="card shadow">
          <div className="card-body">
            <input
              className="card-title"
              name="title"
              autoComplete="off"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Wpisz tytuł..."
            />
            <textarea
              className="card-subtitle"
              rows="3"
              cols="25"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tutaj wpisz opis..."
            />
          </div>
          <div className="icons">
            <i
              className={
                listId === "list-1" ? "far fa-edit" : listId === "list-2" ? "far fa-check-circle" : "far fa-circle"
              }
            />
            <i className="fas fa-plus form" onClick={handleAddTask} />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTask;
