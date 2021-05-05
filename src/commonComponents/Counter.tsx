import * as React from 'react';
import { backgroundBlue } from '../utility/colors';
import styled from 'styled-components';
import Pokemon from '../models/Pokemon';
import Hunt from '../models/Hunt';
import deleteSvg from '../images/delete.svg';

// TODO: Add props
// Get Image dynamically
// Create reset button
// Create timer
// make background image

const defaultImageUrl = 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard-gmax.gif';
const imageHeightAndWidth = '150px';

const Counter = (props: Props) => {
	const { pokemon, count, id } = props.hunt;
	const increaseCounter = () => props.setHuntCounter(id, count + 1);
	const handleUserKeyPress = React.useCallback(
		(event) => {
			if (event.key === '`') increaseCounter();
		},
		[count]
	);

	React.useEffect(() => {
		window.addEventListener('keydown', handleUserKeyPress);

		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	return (
		<StyledBorder wide={props.wide}>
			<PokemonName>{pokemon.englishName ?? 'Charizard (G-Max)'}</PokemonName>
			<DeleteIcon onClick={() => props.removeActiveHunt(id)}>
				<img src={deleteSvg} alt="delete" />
			</DeleteIcon>
			<div onClick={() => increaseCounter()}>
				<PokemonContainer wide={props.wide}>
					<PokemonSphere>
						<img src={pokemon.imageUrl ?? defaultImageUrl} alt="pokemon image" />
					</PokemonSphere>
				</PokemonContainer>
				<StyledCounter wide={props.wide}>{count}</StyledCounter>
			</div>
		</StyledBorder>
	);
};

interface Props {
	hunt: Hunt;
	setHuntCounter: (id: string, count: number) => void;
	finishHunt: (id: string) => void;
	removeActiveHunt: (id: string) => void;
	wide?: boolean;
}

Counter.defaultProps = {
	wide: false
};

const StyledBorder = styled.div<{ wide: boolean }>`
	background-color: ${backgroundBlue};
	background: linear-gradient(35deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
	width: ${(props) => (props.wide ? '400px' : '270px')};
	height: ${(props) => (props.wide ? '250px' : '400px')};
	border-radius: 12px;
`;

const PokemonName = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-left: 15px;
	margin-top: 0;
	float: left;
`;

const DeleteIcon = styled.div`
	float: right;
`;

const PokemonContainer = styled.div<{ wide: boolean }>`
	width: 100%;
	margin: auto;
	margin-bottom: 60px;
	display: ${(props) => (props.wide ? 'inline-flex' : 'block')};
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

const StyledCounter = styled.div<{ wide: boolean }>`
	height: 30%;
	font-size: 42px;
	margin: auto;
	width: 50px;
	display: ${(props) => (props.wide ? 'inline-flex' : 'block')};
`;

export default Counter;
