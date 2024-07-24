import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../Redux/Actions/actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(search));
  };
  return (
    <div>
      <form onChange={handleChange}>
      {/* <select>
          <option value="">All countries</option>
          {allCountries?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select> */}
        <input
          type="text"
          placeholder="Ingrese Nombre"
          value={search}
          
        />
        <button onClick={handleSubmit}>Search Country</button>
        {/* <button type="button" onClick=''>All Countries</button> */}
      </form>
      
    </div>
  );
};

export default SearchBar;
