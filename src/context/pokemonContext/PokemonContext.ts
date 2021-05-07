import * as React from 'react';
import Pokemon from '../../models/Pokemon';

export interface PokemonContext {
	pokemon: Pokemon[];
}

const defaultPokemonContext = {
	pokemon: [] as Pokemon[]
};

const pokemonContext = React.createContext<PokemonContext>(defaultPokemonContext);
export default pokemonContext;
