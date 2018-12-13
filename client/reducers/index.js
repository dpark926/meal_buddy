import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import recipeReducer from "./recipeReducer";
import bookmarkReducer from "./bookmarkReducer";

export default combineReducers({
  list: itemReducer,
  recipe: recipeReducer,
  bookmark: bookmarkReducer
});
