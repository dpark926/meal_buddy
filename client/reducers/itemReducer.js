import {
  GET_SHOPPING_ITEMS,
  ADD_SHOPPING_ITEMS,
  DELETE_SHOPPING_ITEMS
} from "../actions/types";

const initialState = { list: [] };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_SHOPPING_ITEMS:
      return {
        ...state
      };
    case ADD_SHOPPING_ITEMS:
      const copy = state;
      copy.list.push(payload);
      return { ...copy };
    default:
      return state;
  }
}
