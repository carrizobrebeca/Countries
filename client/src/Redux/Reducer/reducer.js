import {
  GET_COUNTRIES,
  PAGINATE,
  SEARCH_COUNTRIES,
  GET_DETAIL,
  ORDER,
  ORDER_POPULATION,
  FILTER_CONTINENTS,
  GET_ACTIVIY,
  FILTER_ACTIVITY,
  POST_ACTIVITY
} from "../Actions/actions-types";

let initialState = {
  allCountries: [],
  copyCountries: [],
  activities: [],
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
        notFound: true,
        paginatedCountries: action.payload.slice(0, ITEMS_PER_PAGE),
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
      return {
        ...state,
        allCountries:
          action.payload === "A"
            ? orderedByPopulation.sort((a, b) => b.population - a.population)
            : orderedByPopulation.sort((a, b) => a.population - b.population),
        paginatedCountries: orderedByPopulation.slice(0, ITEMS_PER_PAGE),
      };

    case FILTER_CONTINENTS:
      let filterContinents =
        action.payload === "All"
          ? [...state.allCountries]
          : [...state.allCountries].filter(
              (c) => c.continents.includes(action.payload)
            );
      return {
        ...state,
        allCountries: filterContinents,
        paginatedCountries: [...filterContinents].slice(0, ITEMS_PER_PAGE),
      };

    case GET_ACTIVIY:
      return {
        ...state,
        activities: action.payload,
       
      };
    case FILTER_ACTIVITY:
      let filterActivities =
        action.payload === ""
          ? [...state.allCountries]
          : [...state.allCountries].filter(
              (c) => c.activity.includes(action.payload)
            );
      return {
        ...state,
        allCountries: filterActivities,
        paginatedCountries: [...filterActivities].slice(0, ITEMS_PER_PAGE),
      };
      
    case POST_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]  
      };

    default:
      return {...state};
  }
}

export default rootReducer;
