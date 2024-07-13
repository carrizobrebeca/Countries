import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

const Card = ({country}) => {
  const {id, name, flags, continents, capital, subregion, area, population} = country;

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={flags.png} alt={`${name.common}`} />
        <Link to={`/home`}>
          <h2 className={style.name}>
            {name.common}
          </h2>
        </Link>
      </div>

      <div className={style.description}>
        <h2>
          {continents.join(', ')}
        </h2>
      </div>
    </div>
  )
}

export default Card