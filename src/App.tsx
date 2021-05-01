import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Counter from './commonComponents/Counter';
import Pokemon from './models/Pokemon';

// TODO: make each game into a enum;

export default () => {
	return (
		<>
			<GlobalStyle />
			<Counter pokemon={{} as Pokemon} game="sw/sh" /> {/* this will obvi be moving from here */}
		</>
	);
};

const GlobalStyle = createGlobalStyle`
html {
	height: 100%;
}
body {
	font-family: 'VT323', monospace;
	height: 100%;
	margin: 0;
	color: #ffff;
}
body, input {
	background-color: #2e2e2e;
}
#app {
	height: 100%;
}
`;
