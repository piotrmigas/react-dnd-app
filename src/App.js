import React from "react";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "./redux/actions/listActions";

function App() {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId));
  };

  const lists = useSelector((state) => state.list);
  const listOrder = useSelector((state) => state.ui.listOrder);
  const tasks = useSelector((state) => state.task);

  return (
    <>
      <div className="sidebar" />
      <main>
        <Header />
        <div className="wrapper">
          <DragDropContext onDragEnd={onDragEnd}>
            {listOrder.map((listId) => {
              const list = lists[listId];
              const listTasks = list.tasks.map((taskId) => tasks[taskId]);
              return <List key={list.id} list={list} tasks={listTasks} />;
            })}
          </DragDropContext>
        </div>
      </main>
    </>
  );
}

export default App;
