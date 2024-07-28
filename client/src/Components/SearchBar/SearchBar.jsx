import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountry } from "../../Redux/Actions/actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");
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
    setSearch(e.target.value);
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
      <button onClick={handleSearch}>Search Country</button>
      <button onClick={handleShowAll}>Show All Countries</button>
      {/* </form> */}
    </div>
  );
};

export default SearchBar;
