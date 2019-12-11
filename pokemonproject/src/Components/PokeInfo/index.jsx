import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../Services/api'

const PokeInfo = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState([]);

  useEffect(() => {
    const { name } = props.match.params;
    api.get(`pokemon/${name}`)
      .then(response => setPokemonInfo([response.data]))
      .catch(err => console.log(err));
    api.get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
      .then(response => setPokemonDescription([response.data]))
      .catch(err => console.log(err))
  }, [])
  console.log(pokemonDescription.map( e => e.flavor_text_entries.find(e => e.language.name === 'en')));
  return (
    <>
      <div className="pokeInfo-container">
        {
          pokemonInfo.map((e, idx) => (
            <div key={idx}>
              <h1>{`${e.name}|`} <span>{e.id <= 9 ? `00${e.id}` : null || e.id <= 99 ? `0${e.id}` : e.id}</span></h1>
              <img src={e.id <= 9 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${e.id}.png` : null || e.id <= 99 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${e.id}.png` : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${e.id}.png`} alt="poke-img" />
            </div>))
        }
        {
          pokemonDescription.map((e, idx) => (
            <p>{e.flavor_text_entries.find(e => e.language.name === 'en').flavor_text}</p>
          ))
        }
      </div>
      <Link to='/'>Back to pokédex</Link>
    </>
  );
}

export default PokeInfo;