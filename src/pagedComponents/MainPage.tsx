import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Hunt from '../models/Hunt';
import Button from '../commonComponents/Button';
import { userDataContext } from '../context/userDataContext/UserDataContext';
import Pokemon from '../models/Pokemon';
import Counter from '../commonComponents/Counter';

const MainPage = () => {
	const context = React.useContext(userDataContext);

	const handleAddHunt = () => {
		var hunt: Hunt = {
			id: uuidv4(),
			count: 0,
			pokemon: {} as Pokemon,
			game: 'sw/sh',
			method: 'masuda',
			shinyCharm: true,
			time: '0',
			currentTime: '0'
		};

		context.addActiveHunt(hunt);
	};

	return (
		<>
			<section>
				<Button onClick={handleAddHunt} text="Add hunt" />

				{context.userData.currentHunts?.map((x) => {
					return <Counter pokemon={x.pokemon} game={x.game} />;
				})}
			</section>
		</>
	);
};

export default MainPage;
