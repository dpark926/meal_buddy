import { GET_BOOKMARKS, ADD_BOOKMARK } from "../actions/types";

const initialState = { bookmarksData: [] };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BOOKMARKS:
      return {
        ...state
      };
    case ADD_BOOKMARK:
      const copy = Object.assign({}, state);
      if (!copy.bookmarksData.includes(payload)) {
        copy.bookmarksData.push(payload);
        console.log({ ...copy });
        console.log(state);
        // return Object.assign({ ...copy });
        return { ...copy };
      }
    default:
      return state;
  }
}
