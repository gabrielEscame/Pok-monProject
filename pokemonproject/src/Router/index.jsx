import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PokemonList from '../Components/pokemonList'
import PokeInfo from '../Components/PokeInfo'

const Router = (props) => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={PokemonList}  />
        <Route path='/pokemon/:name' component={PokeInfo} />
    </Switch>
  </BrowserRouter>
)

export default Router 