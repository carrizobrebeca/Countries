import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountry } from "../../Redux/Actions/actions";
import style from "./searchBar.module.css"

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const name = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCountry(search));
  };

  const handleShowAll = () => {
    dispatch(getCountries());
    setSearch("");
  };

  const handleChange = (e) => {
    if(/\d/.test(e.target.value)) {
      setErrorMessage("Numbers are not allowed")
    } else {
      setErrorMessage("");
      setSearch(e.target.value);
    }
    
  };

  return (
    <div>
      {/* <form onChange={handleChange}> */}
      <select value={search} onChange={(e) => setSearch(e.target.value)}>
        <option value="">Select Country Name</option>
        {name?.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      <input 
        type="text"
        value={search}
        onChange={handleChange}
      />
      {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}{" "}
      <button onClick={handleSearch}>Search Country</button>
      <button onClick={handleShowAll}>Show All Countries</button>
      {/* </form> */}
    </div>
  );
};

export default SearchBar;
