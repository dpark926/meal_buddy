import { GET_RECIPES } from "../actions/types";

const initialState = { recipesData: [] };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RECIPES:
      return {
        recipesData: payload
      };
    default:
      return state;
  }
}
