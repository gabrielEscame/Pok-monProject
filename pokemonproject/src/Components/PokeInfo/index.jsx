import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../Services/api'

const PokeInfo = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState([])

  useEffect(() => {
    const { name } = props.match.params;
    api.get(`pokemon/${name}`)
      .then(Response => setPokemonInfo([Response.data]))
      .catch(err => console.log(err))
  }, [])
  console.log(pokemonInfo);
  return (
    <>
      <div>
        {
          pokemonInfo.map((e, idx) => (
            <div key={idx} className="pokeInfo-container">
              <h1>{`${e.name}|`} <span>{e.id <= 9 ? `00${e.id}`: null || e.id <= 99 ? `0${e.id}` : e.id}</span></h1>
              <img src={e.id <= 9 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${e.id}.png` : null || e.id <= 99 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${e.id}.png` : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${e.id}.png`} alt="poke-img"/>
            </div>))
        }
      </div>
      <Link to='/'>Back to pokédex</Link>
    </>
  );
}

export default PokeInfo;