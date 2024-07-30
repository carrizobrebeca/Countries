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
  getActivity,
} from "../../Redux/Actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  //estado global de Redux
  //definir a que estado estamos suscriptos

  const allCountries = useSelector((state) => state.allCountries);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const activities = useSelector((state) => state.activities);

  const optionContinent = [
    "All",
    "Americas",
    "Africa",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];


  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity());
    //return (())=>{
    //clearDetail()}
  }, [dispatch]);

  

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
          <label>Order By Name</label>
            <select onChange={handleOrder}>
            
              <option value="A">A-Z</option>
              <option value="D">Z-A</option>
            </select>
            <label>Order By Population</label>
            <select onChange={handleOrderPopulation}>
             
              <option value="A">Higher Population</option>
              <option value="D">Smaller Population</option>
            </select>
            <label>Filter By Continents</label>
            <select onChange={handleFilterContinents}>
             
              {optionContinent.map((opc) => (
                <option key={opc} value={opc}>
                  {opc}
                </option>
              ))}
            </select>
            <label>Filter By Activities</label>
            <select onChange={handleFilterActivity}>
              {/* <option value="">Filter By Activity</option> */}
              
              {activities?.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
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
