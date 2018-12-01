import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../actions/types";

const initialState = { list: [] };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case ADD_ITEMS:
      console.log(state.list);
      const copy = state;
      copy.list.push(payload);
      console.log(copy);
      return { ...copy };
    default:
      return state;
  }
}
