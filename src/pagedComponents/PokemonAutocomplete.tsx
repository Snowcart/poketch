import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import pokemonContext from '../context/pokemonContext/PokemonContext';
import Pokemon from '../models/Pokemon';

const PokemonAutocomplete = (props: Props) => {
	const context = React.useContext(pokemonContext);

	return (
		<Autocomplete
			options={context.pokemon}
			getOptionLabel={(option) => option.englishName}
			style={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="Pokemon" variant="outlined" />}
			renderOption={(option) => (
				<>
					{option.nationalDexNumber} {option.englishName}
				</>
			)}
			onChange={(event: any, newValue: Pokemon) => props.handleSelectedPokemon(newValue)}
		/>
	);
};

interface Props {
	handleSelectedPokemon: (selection: Pokemon) => void;
}

export default PokemonAutocomplete;
