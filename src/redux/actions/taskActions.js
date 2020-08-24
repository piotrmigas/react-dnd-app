export const addTask = (id, listId, title, content, icon) => ({
  type: "ADD_TASK",
  payload: { id, listId, title, content, icon },
});

export const deleteTask = (id, listId) => ({ type: "DELETE_TASK", payload: { id, listId } });

export const updateTask = (id, listId, updatedTitle, updatedContent) => ({
  type: "UPDATE_TASK",
  payload: { id, listId, updatedTitle, updatedContent },
});
