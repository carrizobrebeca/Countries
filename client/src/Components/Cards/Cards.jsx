import React from 'react'
import Card from '../Card/Card'
import style from './cards.module.css'

const Cards = ({allCountries}) => {
 console.log(allCountries);
  return (
    <div className={style.container} >
    {allCountries.map((countries)=>(
      <Card 
      key={countries.id} 
      id={countries.id}
      name={countries.name}
      flags={countries.flags}
      continents={countries.region}
      capital={countries.capital}
      subregion={countries.subregion}
      area={countries.area}
      population={countries.population}
      />
    ))}
  </div>
  )
}

export default Cards