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
            listId === "list-1"
              ? "far fa-edit float-right"
              : listId === "list-2"
              ? "far fa-check-circle float-right pr-1"
              : "far fa-circle float-right pr-1"
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
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h6 className="font-weight-bold my-3">
            {list.title} <span>({list.tasks.length})</span>
          </h6>
        </div>
        <div className="col-sm-6">
          <span className="lead float-right">
            <span className="badge badge-pill" onClick={() => setFormOpen(!formOpen)}>
              Dodaj <i className={!formOpen ? "fas fa-plus" : "fas fa-minus"} />
            </span>
          </span>
        </div>
      </div>
      <form className={formOpen ? "d-block" : "d-none"}>
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
                <i
                  className={
                    listId === "list-1"
                      ? "far fa-edit float-right"
                      : listId === "list-2"
                      ? "far fa-check-circle float-right pr-1"
                      : "far fa-circle float-right pr-1"
                  }
                />
                <i className="fas fa-plus float-right pr-1" onClick={handleAddTask} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTask;
