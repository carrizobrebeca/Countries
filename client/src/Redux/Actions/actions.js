import axios from "axios";
import {
  GET_COUNTRIES,
  PAGINATE,
  SEARCH_COUNTRIES,
  GET_DETAIL,
  ORDER,
  ORDER_POPULATION,
  FILTER_CONTINENTS,
} from "./actions-types";

const getCountries = () => {
  return async (dispatch) => {
    try {
      const allCountries = await axios("http://localhost:3001/countries");
      console.log(allCountries);
      dispatch({
        type: GET_COUNTRIES,
        payload: allCountries.data,
      });
    } catch (error) {
      console.log("Error al obtener country");
    }
  };
};
const paginate = (page) => ({
  type: PAGINATE,
  payload: { page },
});

const searchCountry = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries/?name=${name}`
      );

      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error al obtener NOMBRE");
    }
  };
};
const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(`http://localhost:3001/countries/${id}`)
      ).data;

      // const data = Array.isArray(response.data) ? response.data[0] : response.data;
      // Asegúrate de obtener un objeto

      dispatch({
        type: GET_DETAIL,
        payload: response,
      });
    } catch (error) {
      console.error("Error detail:", error);
    }
  };
};
const orderCountry = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

const orderPopulation = (population) => {
  return {
    type: ORDER_POPULATION,
    payload: population,
  };
};
const filterContinents = (continents) => {
  return function (dispatch) {
    try {
      dispatch({
        type: FILTER_CONTINENTS,
        payload: continents,
      });
    } catch (error) {
      console.error("Error continents:", error);
    }
  };
};

export {
  getCountries,
  paginate,
  searchCountry,
  getDetail,
  orderCountry,
  orderPopulation,
  filterContinents,
};
