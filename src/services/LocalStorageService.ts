import { v4 as uuidv4 } from 'uuid';
import UserData from '../models/UserData';

const userDataKey = 'userData';

const getDataFromLocalStorage = (): UserData => {
	const rawUserData = localStorage.getItem(userDataKey);
	if (rawUserData) return JSON.parse(rawUserData);

	if (!rawUserData) return { name: uuidv4(), currentHunts: [], completedHunts: [] } as UserData;
	try {
		return JSON.parse(rawUserData);
	} catch (e) {
		console.error(`Failed to parse JSON from storage: ${rawUserData}`);
		return { name: uuidv4(), currentHunts: [], completedHunts: [] } as UserData;
	}
};

const setDataInStorage = (userData: UserData) => localStorage.setItem(userDataKey, JSON.stringify(userData));

export { getDataFromLocalStorage, setDataInStorage };
