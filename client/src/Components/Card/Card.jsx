import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id, name, flags, continents, capital, subregion, area, population}) => {
 
  return (
    <div className={style.container} key={id}>
      <div className={style.imgContainer}>
        <img src={flags} alt={name} />
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>
            {name}
          </h2>
        </Link>
      </div>

      <div className={style.description}>
        <h2>
          {continents}
        </h2>
      </div>
    </div>
  )
}

export default Card