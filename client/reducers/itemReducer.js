import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../actions/types";

const initialState = {};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case ADD_ITEMS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
