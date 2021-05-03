import fileDownload from 'js-file-download';
import UserData from '../models/UserData';

export const importHuntData = (json: string) => {
	const data = JSON.parse(json);
	return {...data} as UserData;
};

export const exportCharacter = (data: UserData) => {
	const json = JSON.stringify(data);
	const filename = data.name.replace(/[^a-z0-9]+/gi, '_').toLowerCase();
	fileDownload(json, `${filename}.json`);
};
