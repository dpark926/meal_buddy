import { GET_BOOKMARKS, ADD_BOOKMARK } from "./types";

export const getBookmarks = () => {
  return {
    type: GET_BOOKMARKS
  };
};

export const addBookmark = data => {
  return {
    type: ADD_BOOKMARK,
    payload: data
  };
};
