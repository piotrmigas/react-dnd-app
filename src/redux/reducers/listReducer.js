const initialState = {
  "list-0": {
    id: "list-0",
    tasks: ["task-0", "task-1"],
    title: "Do zrobienia",
  },
  "list-1": {
    id: "list-1",
    tasks: ["task-2", "task-3"],
    title: "W trakcie",
  },
  "list-2": {
    id: "list-2",
    tasks: ["task-4"],
    title: "Zrobione",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { listId, id } = action.payload;
      const list = state[listId];
      list.tasks.push(`task-${id}`);
      return { ...state, [listId]: list };
    }
    case "DELETE_TASK": {
      const { listId, id } = action.payload;
      const list = state[listId];
      const newTasks = list.tasks.filter((taskId) => taskId !== id);
      return { ...state, [listId]: { ...list, tasks: newTasks } };
    }
    case "DRAG_HAPPENED":
      const { droppableIdStart, droppableIdEnd, droppableIndexEnd, droppableIndexStart } = action.payload;

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const task = list.tasks.splice(droppableIndexStart, 1);
        list.tasks.splice(droppableIndexEnd, 0, ...task);
        return { ...state, [droppableIdStart]: list };
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state[droppableIdStart];
        const task = listStart.tasks.splice(droppableIndexStart, 1);
        const listEnd = state[droppableIdEnd];
        listEnd.tasks.splice(droppableIndexEnd, 0, ...task);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd,
        };
      }
      return state;
    default:
      return state;
  }
};
