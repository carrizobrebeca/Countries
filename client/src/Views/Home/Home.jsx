import style from "./Home.module.css";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";
// import Pagination from "../../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  paginate,
  orderCountry,
  orderPopulation,
  filterContinents,
  filterActivities,
} from "../../Redux/Actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  //estado global de Redux
  //definir a que estado estamos suscriptos

  const allCountries = useSelector((state) => state.allCountries);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const detail = useSelector((state) => state.detail);

  const optionContinent = [
    "All",
    "Americas",
    "Africa",
    "Antartics",
    "Europe",
    "Oceania",
  ];
  const optionActivity = ["All", " Giraffe Centre", "Puente Tibetano"];
  //para que se ejecute cuando la pagina se carga al inicio
  useEffect(() => {
    dispatch(getCountries());
    //return (())=>{
    //clearDetail()}
  }, [dispatch]);

  //hacer un useEffect que despache search y luego se desmonte el componente (al borrar?) en searchBar?
  const handleNextPage = () => {
    if ((currentPage + 1) * 10 < allCountries.length) {
      dispatch(paginate(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      dispatch(paginate(currentPage - 1));
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (e.target.value !== "Order name") {
      dispatch(orderCountry(e.target.value));
    }
  };
  // para que no se recargue la pagina al hacer el onChange preventDefault();

  const handleFilterContinents = (e) => {
    e.preventDefault();

    dispatch(filterContinents(e.target.value));
  };

  const handleOrderPopulation = (e) => {
    e.preventDefault();
    if (e.target.value !== "Pupulation") {
      dispatch(orderPopulation(e.target.value));
    }
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();

    dispatch(filterActivities(e.target.value));
  };
  return (
    <div>
      <>
        <NavBar />
      </>

      <>
        <div className={style.container}>
          <>
            <select onChange={handleOrder}>
              <option value="">Order By Name</option>
              <option value="A">Order By Name A-Z</option>
              <option value="D">Order By Name Z-A</option>
            </select>
            <select onChange={handleOrderPopulation}>
              <option value="">Order By Population</option>
              <option value="A">Higher Population</option>
              <option value="D">Smaller Population</option>
            </select>

            <select onChange={handleFilterContinents}>
              <option value="">Filter By Continents</option>
              {optionContinent.map((opc) => (
                <option key={opc} value={opc}>
                  {opc}
                </option>
              ))}
            </select>

            <select onChange={handleFilterActivity}>
              <option value="">Filter By Activity</option>
              {optionActivity.map((opc) => (
                <option key={opc} value={opc}>
                  {opc}
                </option>
              ))}
            </select>
          </>

          <>
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
              Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={(currentPage + 1) * 5 >= allCountries.length}
            >
              Next
            </button>
          </>
        </div>
      </>
      <Cards allCountries={paginatedCountries} />
    </div>
  );
};

export default Home;
