import { GET_RECIPES } from "./types";
import { keys } from "../config/keys";

export const getRecipes = (searchItem, sortBy) => dispatch => {
  console.log("REDUX_ACTION: getRecipes");

  let sort;

  switch (sortBy) {
    case "popular":
      sort = "t";
      break;
    case "top_rated":
      sort = "r";
      break;
    default:
      sort = "r";
  }

  fetch(
    `${keys.food2forkAPI}key=${
      keys.food2forkAPIKey
    }&q=${searchItem}&sort=${sort}`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({ type: GET_RECIPES, payload: data });
    })
    .catch(error => {
      dispatch({ payload: error });
    });
};
