import axios from "axios";
import { GET_COUNTRIES, PAGINATE } from "./actions-types";

const getCountries = () => {
  return async (dispatch) => {
    try {
      const allCountries = (await axios("http://localhost:5000/countries")).data;
    
      dispatch({
        type: GET_COUNTRIES,
        payload: allCountries,
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

export { getCountries, paginate };
