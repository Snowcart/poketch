import * as React from 'react';
import { backgroundBlue } from '../utility/colors';
import styled from 'styled-components';

// TODO: Add props
// Get Image dynamically
// Create reset button
// Create timer
// make background image

const Counter = () => {
	const [number, setNumber] = React.useState(110);
	return (
		<StyledBorder onClick={() => setNumber(number + 1)}>
			<PokemonName>PassedInProp</PokemonName>
			<PokemonContainer>
				<PokemonSphere>
					<span>Image of Pokemon</span>
				</PokemonSphere>
			</PokemonContainer>
			<StyledCounter>{number}</StyledCounter>
		</StyledBorder>
	);
};

const StyledBorder = styled.div`
	background-color: ${backgroundBlue};
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

const PokemonSphere = styled.div`
	border: 1px solid red;
	background-color: white;
	border-radius: 100px;
	height: 200px;
	width: 200px;
	margin: auto;
	span {
		text-align: center;
		margin: auto;
		display: block;
		margin-top: 85px;
	}
`;

const StyledCounter = styled.div`
	height: 30%;
	font-size: 42px;
	margin: auto;
	width: 50px;
`;

export default Counter;
