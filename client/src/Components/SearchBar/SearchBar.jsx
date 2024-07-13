import React, { useState } from "react";


const SearchBar = () => {

  return (
    <div>
      <form>
        <select >
          <option>Seleccione Driver</option>
        </select>
        <input type="text" placeholder="Ingrese Nombre" />
        <button type="button" onClick=''>Search Driver</button>
        <button type="button" onClick=''>Drivers</button>
      </form>
    </div>
  );
};

export default SearchBar;