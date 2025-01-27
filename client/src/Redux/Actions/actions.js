import axios from "axios";
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
  POST_ACTIVITY,
} from "./actions-types";

const getCountries = () => {
  return async (dispatch) => {
    try {
      const allCountries = await axios("http://localhost:3001/countries");
      // console.log(allCountries);
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
      alert("Country Not Found", error);
    }
  };
};
const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);
      // const data = Array.isArray(response.data) ? response.data[0] : response.data;
      // Asegúrate de obtener un objeto

      dispatch({
        type: GET_DETAIL,
        payload: response.data,
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
  return {
    type: FILTER_CONTINENTS,
    payload: continents,
  };
};

const getActivity = () => {
  return async function (dispatch) {
    try {
      const activity = await axios.get("http://localhost:3001/activity");
      const getActivities = activity.data;
      
      dispatch({
        type: GET_ACTIVIY,
        payload: getActivities,
      });
    } catch (error) {
      console.error("Error al obtener las actividades:", error);
    }
  };
};

const filterActivities = (activity) => {
 
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
};

const postActivity = (state) => {
  return async function (dispatch) {
    try {
      const activity = await axios.post("http://localhost:3001/activity/", state);
      const postActivities = activity.data
      // console.log(postActivities);
      dispatch({
        type: POST_ACTIVITY,
        payload: postActivities,
      });
      alert("Successfully created country: ", state);
    } catch (error) {
      alert("UNCREATED COUNTRY. ERROR", error);
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
  getActivity,
  filterActivities,
  postActivity,
};
