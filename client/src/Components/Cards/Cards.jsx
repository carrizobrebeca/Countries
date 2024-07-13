import React from 'react'
import Card from '../Card/Card'
import style from './cards.module.css'

const Cards = ({allCountries}) => {
  return (
    <div className={style.container}>
    {allCountries.map((country)=>(
      <Card key={country.cca3} country={country}/>
    ))}
  </div>
  )
}

export default Cards