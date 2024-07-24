import {
  GET_COUNTRIES,
  PAGINATE,
  SEARCH_COUNTRIES,
  GET_DETAIL,
  ORDER,
  FILTER_CONTINENTS,
  ORDER_POPULATION,
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
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ORDER:
      let orderCountries = [...state.allCountries];
      if (action.payload === "A") {
        // Orden ascendente por nombre
        orderCountries = state.allCountries.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else {
        // Orden descendente por nombre
        orderCountries = state.allCountries.slice().sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return {
        ...state,
        allCountries: orderCountries,
        paginatedCountries: orderCountries.slice(0, ITEMS_PER_PAGE),
      };

    case ORDER_POPULATION:
      let orderedByPopulation = [...state.allCountries];
      if (action.payload === "A") {
        // Orden ascendente por población
        orderedByPopulation = orderedByPopulation.sort(
          (a, b) => a.population - b.population
        );
      } else {
        // Orden descendente por población
        orderedByPopulation = orderedByPopulation.sort(
          (a, b) => b.population - a.population
        );
      }
      return {
        ...state,
        allCountries: orderedByPopulation,
        paginatedCountries: orderedByPopulation.slice(0, ITEMS_PER_PAGE),
      };

    case FILTER_CONTINENTS:
      return {
        ...state,
        copyCountries: state.copyCountries.filter((c) => {
          if (c.continents) {
            return c.continents.includes(action.payload);
          }
        }),
      };

    default:
      return state;
  }
}

export default rootReducer;
