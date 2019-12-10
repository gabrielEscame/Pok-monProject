import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PokemonList from '../Components/pokemonList'

const Router = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={PokemonList}  />
    </Switch>
  </BrowserRouter>
)

export default Router 