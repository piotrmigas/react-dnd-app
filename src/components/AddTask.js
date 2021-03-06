import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";

const AddTask = ({ list, listId }) => {
  const [form, setForm] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = ({ title, content }, e) => {
    const id = v4();
    dispatch(addTask(id, listId, title, content, list.icon));
    e.target.reset();
    setForm(false);
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
          <span className="badge" onClick={() => setForm(!form)}>
            Dodaj <i className={!form ? "fas fa-plus" : "fas fa-minus"} />
          </span>
        </div>
      </div>
      <form className={form ? "d-block" : "d-none"} onSubmit={handleSubmit(onSubmit)}>
        <div className="card shadow">
          <div className="card-body">
            <input
              className="card-title"
              name="title"
              autoComplete="off"
              type="text"
              placeholder="Wpisz tytuł..."
              ref={register({ required: true })}
            />
            {errors.title && <span className="error">Pole wymagane</span>}
            <textarea
              className="card-subtitle"
              rows="3"
              cols="25"
              placeholder="Tutaj wpisz opis..."
              ref={register()}
              name="content"
            />
          </div>
          <div className="icons">
            <i
              className={
                listId === "list-1" ? "far fa-edit" : listId === "list-2" ? "far fa-check-circle" : "far fa-circle"
              }
            />
            <button type="submit">
              <i className="fas fa-plus form" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTask;
