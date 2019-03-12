import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const fetchAuthors = () => {
  return async dispatch => {
    // ACTION CALLED BY REDUX THUNK
    const response = await axios.get(
      "https://the-index-api.herokuapp.com/api/authors/"
    );
    const authors = response.data;
    dispatch({
      type: actionTypes.FETCH_AUTHORS,
      payload: authors
    });
  };
};

export const filterAuthors = query => {
  query = query.toLowerCase();
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
