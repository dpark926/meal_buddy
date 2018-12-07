import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  list: itemReducer,
  recipe: recipeReducer
});
