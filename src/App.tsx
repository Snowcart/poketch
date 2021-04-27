import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Counter from './commonComponents/Counter';

export default () => {
	return (
		<>
			<GlobalStyle />
			<Counter />
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
}
body, input {
	background-color: #2e2e2e;
}
#app {
	height: 100%;
}
`;
