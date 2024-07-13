import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './navBar.module.css'
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  const navigate = new useNavigate();
  return (
    <div className={style.container}>
      <button onClick={() => navigate("/home")}>HOME</button>
      <button onClick={() => navigate("/form")}>FORM</button>
      <SearchBar/>
    </div>
  );
};

export default NavBar