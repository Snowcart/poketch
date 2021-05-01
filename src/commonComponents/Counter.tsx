import * as React from 'react';
import { backgroundBlue } from '../utility/colors';
import styled from 'styled-components';
import Pokemon from '../models/Pokemon';

// TODO: Add props
// Get Image dynamically
// Create reset button
// Create timer
// make background image

const defaultImageUrl = 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard-gmax.gif';
const imageHeightAndWidth = '150px';

const Counter = ({ pokemon, game }: Props) => {
	const [number, setNumber] = React.useState(0);
	return (
		<StyledBorder onClick={() => setNumber(number + 1)}>
			<PokemonName>{pokemon.englishName ?? 'Charizard (G-Max)'}</PokemonName>
			<PokemonContainer>
				<PokemonSphere>
					<img src={pokemon.imageUrl ?? defaultImageUrl} alt="pokemon image" />
				</PokemonSphere>
			</PokemonContainer>
			<StyledCounter>{number}</StyledCounter>
		</StyledBorder>
	);
};

interface Props {
	pokemon: Pokemon;
	game: string;
}

const StyledBorder = styled.div`
	background-color: ${backgroundBlue};
	background: linear-gradient(35deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
	width: 270px;
	height: 400px;
	border-radius: 12px;
`;

const PokemonName = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-left: 15px;
`;

const PokemonContainer = styled.div`
	width: 100%;
	height: 200px;
	margin: auto;
	margin-top: 40px;
	margin-bottom: 60px;
`;

// TODO: Make the height and width a var.
const PokemonSphere = styled.div`
	background: rgb(255, 255, 255);
	background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 0, 0, 1) 100%);
	border-radius: 100px;
	height: 200px;
	width: 200px;
	margin: auto;
	display: flex;
	img {
		text-align: center;
		margin: auto;
		display: flex;
		min-width: 90px;
		min-height: 150px;
		margin-top: calc((200px - ${imageHeightAndWidth}) / 2);
	}
`;

const StyledCounter = styled.div`
	height: 30%;
	font-size: 42px;
	margin: auto;
	width: 50px;
`;

export default Counter;
