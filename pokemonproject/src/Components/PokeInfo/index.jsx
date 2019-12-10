import React, { useState, useEffect } from 'react';
import api from '../../Services/api'

const PokeInfo = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState([])

  useEffect(() => {
    const {name} = props.match.params;
    api.get(`pokemon/${name}`)
     .then(Response => setPokemonInfo([Response.data]))
     .catch(err => console.log(err))
  }, [])
  console.log(pokemonInfo);  
  return (
    <div>
      {
        pokemonInfo.map(e => <h1>{e.name}</h1>)
      }
    </div>
  );
}

export default PokeInfo;