import { GET_RECIPES } from "./types";
import { keys } from "../config/keys";

export const getRecipes = searchItem => dispatch => {
  fetch(`${keys.food2forkAPI}key=${keys.food2forkAPIKey}&q${searchItem}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: GET_RECIPES, payload: data });
    })
    .catch(error => {
      dispatch({ payload: error });
    });
};
