import * as actionTypes from "../actions/actionsTypes";
const initialState = {
  author: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
