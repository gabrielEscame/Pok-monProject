import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
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
  console.log(pokemonInfo);
  return (
    <>
      <div className="pokeInfo-container">
        {
          pokemonInfo.map((e, idx) => (
            <div key={idx} className='pokeInfo-pokemon-header' style={e.types[e.types.length - 1].type.name === 'grass' ?{backgroundColor:'#9bcc50'} : {backgroundColor:'red'}}>
              <h1 className='pokeInfo-pokemon-name'>{`${e.name}|`} <span className='pokeInfo-pokemon-number'>{e.id <= 9 ? `00${e.id}` : null || e.id <= 99 ? `0${e.id}` : e.id}</span></h1>
              <img src={e.id <= 9 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${e.id}.png` : null || e.id <= 99 ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${e.id}.png` : `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e.id}.png`} alt="poke-img" />
            </div>))
        }
        {
          pokemonDescription.map((e, idx) => (
            <p key={idx} className='pokeInfo-pokemon-description'>{e.flavor_text_entries.find(e => e.language.name === 'en').flavor_text}</p>
          ))
        }
      <Link to='/'>Back to pokédex</Link>
      </div>
    </>
  );
}

export default PokeInfo;