import React from 'react';
import Counter from '../commonComponents/Counter';
import Hunt from '../models/Hunt';
import styled from 'styled-components';
import pokemonContext from '../context/pokemonContext/PokemonContext';
import { userDataContext } from '../context/userDataContext/UserDataContext';
import { v4 as uuid } from 'uuid';
import PokemonAutocomplete from './PokemonAutocomplete';
import Pokemon from '../models/Pokemon';
import Button from '../commonComponents/Button';

const StreamWrapper = (props: Props) => {
	const refreshedHunt: Hunt = {
		id: uuid(),
		count: 0,
		game: 'sw/sh',
		method: '',
		pokemon: undefined,
		shinyCharm: true,
		time: '',
		currentTime: ''
	};
	const userContext = React.useContext(userDataContext);
	const [newHunt, setNewHunt] = React.useState<Hunt>(refreshedHunt);

	if (userContext.userData.currentHunts[0]) {
		return (
			<Counter
				hunt={userContext.userData.currentHunts[0]}
				setHuntCounter={userContext.setHuntCounter}
				finishHunt={userContext.finishHunt}
				removeActiveHunt={userContext.removeActiveHunt}
				wide={props.wide}
			/>
		);
	}

	return (
		<Wrapper>
			<PokemonAutocomplete
				handleSelectedPokemon={(newPokemon: Pokemon) => setNewHunt({ ...newHunt, pokemon: newPokemon })}
			/>
			<span>Set count: </span>
			<input
				type="number"
				onChange={(event) => setNewHunt({ ...newHunt, count: Number.parseInt(event.target.value) })}
			/>
			<Button
				text="start"
				onClick={() => {
					userContext.addActiveHunt(newHunt);
					setNewHunt({ ...refreshedHunt });
				}}
			/>
		</Wrapper>
	);
};

interface Props {
	wide?: boolean;
}

const Wrapper = styled.div<Props>`
	width: ${(props) => (props.wide ? '400px' : '270px')};
	height: ${(props) => (props.wide ? '250px' : '400px')};
	background-color: green;
`;

export default StreamWrapper;
