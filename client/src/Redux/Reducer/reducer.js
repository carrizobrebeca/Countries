import { GET_COUNTRIES, PAGINATE } from "../Actions/actions-types";

let initialState = {
  allCountries: [],
  currentPage: 0,
  paginatedCountries: [],
};

function rootReducer(state = initialState, action) {
  const ITEMS_PER_PAGE = 5;

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        paginatedCountries: action.payload.slice(0, ITEMS_PER_PAGE),
      };

    case PAGINATE:
      const { page } = action.payload;
      const startIndex = page * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return {
        ...state,
        currentPage: page,
        paginatedCountries: state.allCountries.slice(startIndex, endIndex),
      };

    default:
      return state;
  }
}

export default rootReducer;
