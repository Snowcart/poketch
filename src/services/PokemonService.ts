import Pokemon from "../models/Pokemon";

export const getPokemonAsArray = (jsonString: string) =>
{
    const pokemon = JSON.parse(jsonString) as Pokemon[];

    // the below is a hack to force an array on Generations.
    pokemon.forEach(mon => {
        if(!Array.isArray(mon.availableGames) && typeof(mon.availableGames) === "string")
        {
            const availableGamesAsString: string = mon.availableGames; // this is to deal with breaking compile time Typescript
            const genStringArray = availableGamesAsString.split(',');
            const genNumberArray = [];
            genStringArray.forEach(numberAsString => {
                try {
                    const genAsNumber = Number.parseInt(numberAsString);
                    genNumberArray.push(genAsNumber);
                }
                catch(e)
                {
                    console.log("Error when trying to parse int in available games" + e);
                }
            })
        }
    })
}