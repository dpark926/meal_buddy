import {
  GET_SHOPPING_ITEMS,
  ADD_SHOPPING_ITEMS,
  DELETE_SHOPPING_ITEMS
} from "./types";

export const getItems = () => {
  return {
    type: GET_SHOPPING_ITEMS
  };
};

export const addItems = data => {
  return {
    type: ADD_SHOPPING_ITEMS,
    payload: data
  };
};
