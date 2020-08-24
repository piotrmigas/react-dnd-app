import { combineReducers } from "redux";
import task from "./taskReducer";
import list from "./listReducer";
import ui from "./uiReducer";

export default combineReducers({
  task,
  list,
  ui,
});
