import { GET_RECIPES } from "../actions/types";

const initialState = { recipesData: [] };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RECIPES:
      console.log("REDUX_REDUCER: GET_RECIPES");
      console.log(payload);
      return {
        recipesData: payload
      };
    default:
      return state;
  }
}
