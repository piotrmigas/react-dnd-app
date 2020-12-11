const initialState = {
  "task-0": {
    id: "task-0",
    list: "list-0",
    title: "Poprawki karta",
    content: "Wprowadzenie poprawek na karcie",
    icon: "far fa-circle float-right pr-1",
  },
  "task-1": {
    id: "task-1",
    list: "list-0",
    title: "Komponenty dla Mobi",
    content: "Dodanie brakujących komponentów",
    icon: "far fa-circle float-right pr-1",
  },
  "task-2": {
    id: "task-2",
    list: "list-1",
    title: "Poprawki dokumenty",
    content: "Wprowadzenie optymalizacji w wyświetlaniu dokumentów",
    icon: "far fa-edit float-right",
  },
  "task-3": {
    id: "task-3",
    list: "list-1",
    title: "Tablica dokumentów",
    content: "Zaprojektowanie tablicy dokumentów",
    icon: "far fa-edit float-right",
  },
  "task-4": {
    id: "task-4",
    list: "list-2",
    title: "Test A/B",
    content: "Przeprowadzanie testów A/B",
    icon: "far fa-check-circle float-right pr-1",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { id, listId, title, content, icon } = action.payload;
      const newTask = {
        id: `task-${id}`,
        list: listId,
        title,
        content,
        icon,
      };
      return {
        ...state,
        [`task-${id}`]: newTask,
      };
    }
    case "DELETE_TASK": {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    case "UPDATE_TASK": {
      const { id, updatedTitle, updatedContent } = action.payload;
      const task = state[id];
      task.title = updatedTitle;
      task.content = updatedContent;
      return { ...state, [`task-${id}`]: task };
    }
    default:
      return state;
  }
};
