import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const addItems = data => {
  console.log(data);
  return {
    type: ADD_ITEMS,
    payload: {
      list: data
    }
  };
};
