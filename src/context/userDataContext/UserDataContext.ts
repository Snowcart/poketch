import * as React from 'react';
import Hunt from '../../models/Hunt';
import UserData from '../../models/UserData';

export interface UserDataContext {
	userData: UserData;
	addActiveHunt: (hunt: Hunt) => void;
	finishHunt: (id: string) => void;
	addFinishedHunt: (hunt: Hunt) => void;
	removeActiveHunt: (id: string) => void;
	removeFinishedHunt: (id: string) => void;
	setHuntCounter: (id: string, count: number) => void;
}

const defaultUserDataContext = {
	userData: {} as UserData,
	addActiveHunt: () => {},
	finishHunt: () => {},
	addFinishedHunt: () => {},
	removeActiveHunt: () => {},
	removeFinishedHunt: () => {},
	setHuntCounter: () => {}
};

export const userDataContext = React.createContext<UserDataContext>(defaultUserDataContext);
