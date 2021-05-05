import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Hunt from '../models/Hunt';
import Button from '../commonComponents/Button';
import { userDataContext } from '../context/userDataContext/UserDataContext';
import Pokemon from '../models/Pokemon';
import Counter from '../commonComponents/Counter';
import pokemonContext from '../context/pokemonContext/PokemonContext';
import Dialog from '../commonComponents/Dialog';
import PokemonAutocomplete from './PokemonAutocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

interface PokemonFormData {
	selectedPokemon: Pokemon;
	method: string;
	game: string;
}

const MainPage = () => {
	const context = React.useContext(userDataContext);
	const allPokemon = React.useContext(pokemonContext);
	const [openHuntWindow, setOpenHuntWindow] = React.useState(false);
	const [newHuntInfo, setNewHuntInfo] = React.useState({ game: 'sw/sh' } as PokemonFormData);

	const handleAddHunt = () => {
		setOpenHuntWindow(true);
	};

	const handleSelectedPokemon = (selectedPokemon: Pokemon) => {
		const updatedFormData = { ...newHuntInfo };
		updatedFormData.selectedPokemon = selectedPokemon;
		setNewHuntInfo(updatedFormData);
		console.log(selectedPokemon);
	};

	const handleFormSubmit = () => {
		// state could be a hunt object
		// this form handling is bad.
		if (newHuntInfo.game && newHuntInfo.method && newHuntInfo.selectedPokemon) {
			const hunt: Hunt = {
				game: newHuntInfo.game,
				pokemon: newHuntInfo.selectedPokemon,
				method: newHuntInfo.method,
				count: 0,
				shinyCharm: true,
				time: '',
				currentTime: '',
				id: uuidv4()
			};

			context.addActiveHunt(hunt);
			setOpenHuntWindow(false);
		} else {
			alert('Form not complete');
			return;
		}
	};

	const formButtons = () => (
		<div>
			<Button text="Add Hunt" onClick={handleFormSubmit} />
		</div>
	);

	// If machine is currently parsing JSON return loading.
	if (!allPokemon.pokemon || allPokemon.pokemon.length < 1) {
		// TODO: use real loading spinner
		return <div>Loading...</div>;
	}

	return (
		<>
			<section>
				<Button onClick={handleAddHunt} text="Add hunt" />

				{context.userData.currentHunts?.map((x) => {
					return (
						<Counter
							hunt={x}
							setHuntCounter={context.setHuntCounter}
							finishHunt={context.finishHunt}
							removeActiveHunt={context.removeActiveHunt}
							key={x.id}
						/>
					);
				})}

				<Dialog
					isOpen={openHuntWindow}
					title="Start new Hunt"
					handleClose={() => setOpenHuntWindow(false)}
					actions={formButtons()}
				>
					<div>
						<PokemonAutocomplete handleSelectedPokemon={handleSelectedPokemon} />
						<Autocomplete
							options={['masuda', 'chain']}
							renderInput={(params) => <TextField {...params} label="Method" variant="outlined" />}
							onChange={(event: any, newValue: string) => setNewHuntInfo({ ...newHuntInfo, method: newValue })}
						/>
					</div>
				</Dialog>
			</section>
		</>
	);
};

export default MainPage;
