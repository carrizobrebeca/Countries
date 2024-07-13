//import style from "./Home.module.css"
import React, { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, paginate } from "../../Redux/Actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  //estado global de Redux
  //definir a que estado estamos suscriptos

  const allCountries = useSelector((state) => state.allCountries);

  const currentPage = useSelector((state) => state.currentPage);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  
  //para que se ejecute cuando la pagina se carga al inicio
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleNextPage = () => {
    if ((currentPage + 1) * 5 < allCountries.length) {
      dispatch(paginate(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      dispatch(paginate(currentPage - 1));
    }
  };

  return (
    <div>
      <>
        <NavBar />
      </>

      <>
        <select>
          <option value="ALL">Todos</option>
        </select>

        <select>
          <option value="A">Ordenar nombre A-Z</option>
          <option value="D">Ordenar nombre Z-A</option>
        </select>
        <select>
          <option value="DESC">Orden Nacimiento 1990-1913</option>
          <option value="ASC">Orden Nacimiento 1913-1990</option>
        </select>
        <select>
          <option>TODOS</option>
          <option>Base de Datos</option>
          <option>API</option>
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
      <Cards allCountries={paginatedCountries} />
    </div>
  );
};

export default Home;
