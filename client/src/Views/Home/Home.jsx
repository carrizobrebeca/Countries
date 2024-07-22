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
} from "../../Redux/Actions/actions";


const Home = () => {
  const dispatch = useDispatch();

  //estado global de Redux
  //definir a que estado estamos suscriptos

  const allCountries = useSelector((state) => state.allCountries);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  const currentPage = useSelector((state) => state.currentPage);

  // const [currentPage, setCurrentPage] = useState(0);
  // const COUNTRIESXPAGE = 10;
  // const LAST_PAGE = Math.ceil(allCountries.length / COUNTRIESXPAGE);


  // const handleClick = (event) => {
  //   switch (event.target.name) {
  //     case "first":
  //       setCurrentPage(1);
  //       break;
  //     case "prev":
  //       setCurrentPage(currentPage - 1);
  //       break;
  //     case "next":
  //       setCurrentPage(currentPage + 1);
  //       break;
  //     case "last":
  //       setCurrentPage(LAST_PAGE);
  //       break;
  //     default:
  //       setCurrentPage(parseInt(event.target.name));
  //       break;
  //   }
  // };
  // const firsrItem = COUNTRIESXPAGE * (currentPage - 1);
  // const lastItem = firsrItem + COUNTRIESXPAGE;
  // const country = allCountries.slice(firsrItem, lastItem);

  //para que se ejecute cuando la pagina se carga al inicio
  useEffect(() => {
    dispatch(getCountries());
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
    dispatch(orderCountry(e.target.value));
  };

  // const handleSortContinents = (e) => {
  //   e.preventDefault();
  //   if (e.target.value !== "continents") dispatch(ordenDriverDod(e.target.value));
  // };

  return (
    <div>
      <>
        <NavBar />
      </>

      <>
        <select>
          <option value="ALL">Todos</option>
        </select>

        <select onChange={handleOrder}>
          <option value="A">Ordenar nombre A-Z</option>
          <option value="D">Ordenar nombre Z-A</option>
        </select>
        <select>
          <option value="DESC">Orden Nacimiento 1990-1913</option>
          <option value="ASC">Orden Nacimiento 1913-1990</option>
        </select>
        <select>
          <option>TODOS</option>
        </select>
        {/* 
  <select onChange={(e) => handleFilterCreated(e)}>
    <option value="ALL">TODOS</option>
    <option value="db">Base de Datos</option>
    <option value="api">API</option>
  </select> */}
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
