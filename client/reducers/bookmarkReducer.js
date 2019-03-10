import { GET_BOOKMARKS, ADD_BOOKMARK } from "../actions/types";

const initialState = { bookmarksData: [] };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BOOKMARKS:
      return {
        ...state
      };
    case ADD_BOOKMARK:
      const copy = state.bookmarksData.slice();
      if (!copy.includes(payload)) {
        copy.push(payload);
        return { bookmarksData: copy };
      }
    default:
      return state;
  }
}
