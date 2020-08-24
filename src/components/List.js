import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import AddTask from "./AddTask";

const List = ({ list, tasks }) => (
  <div className="col-sm-4">
    <AddTask list={list} listId={list.id} />
    <div className="row">
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div className="col-sm-12" {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} listId={list.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  </div>
);

export default List;
