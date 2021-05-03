import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Counter from './commonComponents/Counter';
import Pokemon from './models/Pokemon';
import MainPage from './pagedComponents/MainPage';

// TODO: make each game into a enum;

export default () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/stream" render={() => <Counter pokemon={{} as Pokemon} game="sw/sh" />} />
				<Route exact path="/stream-wide" render={() => <Counter pokemon={{} as Pokemon} game="sw/sh" wide />} />
			</Router>
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
	background-color: transparent;
}
#app {
	height: 100%;
}
`;
