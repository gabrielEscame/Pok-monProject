import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import Button from '../button/index'
import api from '../../Services/api'

const Test = () => {
  const [pokemon, setPokemon] = useState([])
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    api.get(`pokemon/?offset=${counter}&limit=21`)
      .then(response => setPokemon([...response.data.results])
      )
      .catch(err => console.log(err))

  }, [counter]);

  const handleClick = () => {
    let num = counter + 21;
    setCounter(num);
  }

  const handleClickBack = () => {
    let num = counter - 21;
    setCounter(num);
  }

  return (
    <>
      <Button type={'submit'} method={() => handleClick()} label={'Next page'} />
      <Button type={'submit'} method={() => handleClickBack()} label={'Previous page'} />

      <div className='pokemons-main-container'>
        {
          pokemon.map((e, idx) => (
            <Link key={idx} to={`pokemon/${e.name}`} className='pokemon-container'>
              <h1>{e.name} |
                <span className='pokemon-number'>
                  {idx + counter < 9 ? `00${idx + counter + 1}` : null || idx + counter < 99 ? `0${idx + counter + 1}` : idx + counter + 1}
                </span>
              </h1>
              <img src={idx + counter < 9 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${idx + counter + 1}.png` : null || idx + counter < 99 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${idx + counter + 1}.png` : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idx + counter + 1}.png`} alt="pokemon-img" />
            </Link>
          ))
        }
      </div>
      <Button type={'submit'} method={() => handleClick()} label={'Next page'} />
      <Button type={'submit'} method={() => handleClickBack()} label={'Previous page'} />
    </>
  )
}

export default Test;




