import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountry } from "../../Redux/Actions/actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const allCountries = useSelector((state) => state.allCountries);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
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
      <form onChange={handleChange}>
        <select>
          <option value="">Select Country Name</option>
          {allCountries?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <input type="text" placeholder="Name Country" value={search} onChange={handleChange} />
        <button onClick={handleSubmit}>Search Country</button>
        {/* <button type="button" onClick=''>All Countries</button> */}
      </form>
    </div>
  );
};

export default SearchBar;
