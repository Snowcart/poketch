import * as React from "react";
import Pokemon from "../../models/Pokemon";
import { PokemonContext } from "./PokemonContext";
import pokemonJson from '../../files/pokemon.json';
import { getPokemonAsArray } from '../../services/PokemonService';

// TODO: Add to this file to make generic functions to handle pokemon data. These can be moved to a backend eventually.

export const usePokemonContext = (): PokemonContext => {
	const [pokemon, setPokemonState] = React.useState<Pokemon[]>([]);

	React.useEffect(() => {
		// this can be removed in the future, and is basically taking our json and typing it.
		const pokemonArray: Pokemon[] = [];
		pokemonJson.forEach(mon => {
			const typedMon: Pokemon = {
				nationalDexNumber: mon.nationalDex,
				englishName: mon.englishName,
				germanName: mon.germanName,
				frenchName: mon.frenchName,
				japaneseName: mon.japaneseName,
				availableGames: mon.avaiableGens as any,
				imageUrl: mon.imageUrl
			};
			pokemonArray.push(typedMon);
		})
		const pokemonAsArray = getPokemonAsArray(pokemonArray as Pokemon[]);
		setPokemonState([...pokemonAsArray]);
	}, [])


	return { pokemon }
}