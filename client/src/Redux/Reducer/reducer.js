import {
  GET_COUNTRIES,
  PAGINATE,
  GET_DETAIL,
  SEARCH_COUNTRIES,
  ORDER,
  // ORDER_COUNTRY,
} from "../Actions/actions-types";

let initialState = {
  allCountries: [],
  copyCountries: [],
  detail: {},
  currentPage: 0,
  paginatedCountries: [],
  notFound: false,
};

function rootReducer(state = initialState, action) {
  const ITEMS_PER_PAGE = 10;

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload,
        detail: action.payload,
        paginatedCountries: action.payload.slice(0, ITEMS_PER_PAGE),
        notFound: false,
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
    case SEARCH_COUNTRIES:
      if (action.payload.error) {
        return {
          ...state,
          copyCountries: [],
          notFound: true,
        };
      } else {
        return {
          ...state,
          copyCountries: action.payload,
          notFound: false,
        };
      }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ORDER:
      let orderCountries;
      if (action.payload === "A") {
        // Orden ascendente por nombre
        orderCountries = state.allCountries.slice().sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
      } else {
        // Orden descendente por nombre
        orderCountries = state.allCountries.slice().sort((a, b) => {
          return b.name.common.localeCompare(a.name.common);
        });
      }
      return {
        ...state,
        allCountries: orderCountries,
        paginatedCountries: orderCountries.slice(0, ITEMS_PER_PAGE),
      };
   

    default:
      return state;
  }
}

export default rootReducer;
