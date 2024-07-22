import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../Redux/Actions/actions";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const name = useSelector((state) => state.copyCountries);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(search));
  };
  return (
    <div>
    
        <select >
          <option>Select Country</option>
        </select>
        <input type="text" placeholder="Ingrese Nombre" value={search} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Search Country</button>
        {/* <button type="button" onClick=''>All Countries</button> */}
     
    </div>
  );
};

export default SearchBar;