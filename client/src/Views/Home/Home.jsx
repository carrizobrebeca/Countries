//import style from "./Home.module.css"
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
} from "../../Redux/Actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  //estado global de Redux
  //definir a que estado estamos suscriptos

  const allCountries = useSelector((state) => state.allCountries);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const copyCountries = useSelector((state) => state.copyCountries);

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
    if (e.target.value !== "Continents") {
      dispatch(filterContinents(e.target.value));
    }
  };

  const handleOrderPopulation = (e) => {
    e.preventDefault();
    if (e.target.value !== "Pupulation") {
      dispatch(orderPopulation(e.target.value));
    }
  };
  return (
    <div>
      <>
        <NavBar />
      </>

      <>
        <select onChange={handleOrder}>
          <option value="">Order name</option>
          <option value="A">Order name A-Z</option>
          <option value="D">Order name Z-A</option>
        </select>
        <select onChange={handleOrderPopulation}>
          <option value="">Population</option>
          <option value="A">Higher Population</option>
          <option value="D">Smaller Population</option>
        </select>

        <select onChange={handleFilterContinents}>
          <option value="">Continents</option>
          {copyCountries.map((e) => {
            return (
              <option key={e.id} value={e.continents}>
                {e.continents}
              </option>
            );
          })}
        </select>
    
      </>
      
      <>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * 5 >= allCountries.length}
        >
          Siguiente
        </button>
      </>

      {/* 
      <Pagination
        currentPage={currentPage}
        LAST_PAGE={LAST_PAGE}
        handleClick={handleClick}
      /> */}
      <Cards allCountries={paginatedCountries} />
    </div>
  );
};

export default Home;
