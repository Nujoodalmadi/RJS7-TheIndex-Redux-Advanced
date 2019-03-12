import * as actionTypes from "../actions/actionsTypes";
const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        filteredAuthors: state.authors.concat(action.payload),
        loading: false
      };

    case actionTypes.FILTER_AUTHORS:
      return {
        ...state,
        filteredAuthors: state.authors.filter(author =>
          `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.payload)
        )
      };
    default:
      return state;
  }
};

export default reducer;
