import Pokemon from "./Pokemon";

export default interface Hunt {
	id: string;
	count: number;
	game: string; // make this an enum
	pokemon: Pokemon;
	method: string; // make this an enum
	shinyCharm: boolean;
	time: string;
	currentTime: string;
}