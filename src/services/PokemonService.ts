import Pokemon from '../models/Pokemon';

// eslint-disable-next-line import/prefer-default-export
export const getPokemonAsArray = (pokemon: Pokemon[]) => {
	// const pokemon = JSON.parse(jsonString) as Pokemon[];

	// the below is a hack to force an array on Generations.
	pokemon.forEach((mon) => {
		if (!Array.isArray(mon.availableGames) && typeof mon.availableGames === 'string') {
			const availableGamesAsString: string = mon.availableGames; // this is to deal with breaking compile time Typescript
			const availableGamesRemovedBraces = availableGamesAsString.replace(/[[\]']+/g, '').replace(/\s/g, '');
			const genStringArray = availableGamesRemovedBraces.split(',');
			const genNumberArray: number[] = [];
			genStringArray.forEach((numberAsString) => {
				try {
					const genAsNumber = Number.parseInt(numberAsString, 10);
					genNumberArray.push(genAsNumber);
				} catch (e) {
					console.log(`Error when trying to parse int in available games${e}`);
				}
			});

			// Do not do this future me
			// eslint-disable-next-line no-param-reassign
			mon.availableGames = genNumberArray;
		}
	});

	return pokemon;
};
