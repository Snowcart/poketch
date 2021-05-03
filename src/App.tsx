import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Counter from './commonComponents/Counter';
import { userDataContext } from './context/userDataContext/UserDataContext';
import { useUserDataContext } from './context/userDataContext/useUserDataContext';
import Pokemon from './models/Pokemon';
import MainPage from './pagedComponents/MainPage';

// TODO: make each game into a enum;

export default () => {
	const userDataValue = useUserDataContext();
	const streamMode = window.location.pathname.includes('stream'); // TODO: this should use the react router
	return (
		<>
			<GlobalStyle streamMode={streamMode} />
			<userDataContext.Provider value={userDataValue}>
				<Router>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/stream" render={() => <Counter pokemon={{} as Pokemon} game="sw/sh" />} />
					<Route exact path="/stream-wide" render={() => <Counter pokemon={{} as Pokemon} game="sw/sh" wide />} />
				</Router>
			</userDataContext.Provider>
		</>
	);
};

const GlobalStyle = createGlobalStyle<{ streamMode: boolean }>`
html {
	height: 100%;
}
body {
	font-family: 'VT323', monospace;
	margin: 0;
	color: #ffff;
	${(props) =>
		props.streamMode
			? 'background-color: transparent'
			: `
		background: rgb(245,155,255);
		background: linear-gradient(0deg, rgba(245,155,255,1) 0%, rgba(116,254,255,1) 100%);
	`}
}
body, input {
	background-color: transparent;
}
#app {
}
`;
