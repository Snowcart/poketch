import UserData from "src/models/UserData";

const userDataKey = 'userData';

const getDataFromLocalStorage = (): UserData => {
	const rawUserData = localStorage.getItem(userDataKey);
	if (rawUserData) return JSON.parse(rawUserData);

	if (!rawUserData) return {} as UserData;
	try {
		return JSON.parse(rawUserData);
	} catch (e) {
		console.error(`Failed to parse JSON from storage: ${rawUserData}`);
		return {} as UserData;
	}
};

const setDataInStorage = (userData: UserData) => localStorage.setItem(userDataKey, JSON.stringify(userData));

export { getDataFromLocalStorage, setDataInStorage };
