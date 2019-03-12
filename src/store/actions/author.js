import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const fetchAuthorDetail = authorID => {
  return async dispatch => {
    const response = await axios.get(
      `https://the-index-api.herokuapp.com/api/authors/${authorID}`
    );
    const fetchedAuthor = response.data;
    dispatch({
      type: actionTypes.FETCH_AUTHOR_DETAIL,
      payload: fetchedAuthor
    });
  };
};
