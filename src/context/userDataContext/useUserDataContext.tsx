import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Hunt from '../../models/Hunt';
import { getDataFromLocalStorage, setDataInStorage } from '../../services/LocalStorageService';
import { UserDataContext } from './UserDataContext';
import UserData from '../../models/UserData';

export const useUserDataContext = (): UserDataContext => {
	const dataFromStorage = getDataFromLocalStorage();
	const [userData, setUserData] = React.useState(dataFromStorage);

	const updateTheUserObject = (updatedUserData: UserData) => {
		const toUpdate = { ...updatedUserData };
		setUserData(toUpdate);
		setDataInStorage(updatedUserData);
	};

	const addActiveHunt = React.useCallback(
		(hunt: Hunt) => {
			const copyOfUserData = { ...userData };
			copyOfUserData.currentHunts.push(hunt);
			updateTheUserObject(copyOfUserData);
		},
		[userData.currentHunts]
	);

	const finishHunt = (id: string) => {
		const updatedUserData = { ...userData };
		const hunt = updatedUserData.currentHunts.find((x) => x.id === id);
		if (!hunt) throw 'hunt not found';
		updatedUserData.completedHunts.push(hunt);
		updatedUserData.currentHunts = updatedUserData.completedHunts.filter((x) => x.id !== id);
		updateTheUserObject(updatedUserData);
	};

	const addFinishedHunt = React.useCallback(
		(hunt: Hunt) => {
			const updatedUserData = { ...userData };
			updatedUserData.completedHunts.push(hunt);
			updateTheUserObject(updatedUserData);
		},
		[userData.completedHunts]
	);

	const removeActiveHunt = React.useCallback(
		(id: string) => {
			const updatedUserData = { ...userData };
			const filteredHunts = updatedUserData.currentHunts.filter((x) => x.id !== id);
			updatedUserData.currentHunts = filteredHunts;
			updateTheUserObject(updatedUserData);
		},
		[userData.currentHunts]
	);

	const removeFinishedHunt = React.useCallback(
		(id: string) => {
			const updatedUserData = { ...userData };
			const filteredHunts = updatedUserData.completedHunts.filter((x) => x.id !== id);
			updatedUserData.completedHunts = filteredHunts;
			updateTheUserObject(updatedUserData);
		},
		[userData.completedHunts]
	);

	return {
		userData,
		addActiveHunt,
		finishHunt,
		addFinishedHunt,
		removeActiveHunt,
		removeFinishedHunt
	};
};
