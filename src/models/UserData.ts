import Hunt from "./Hunt";

export default interface UserData
{
	name: string;
	currentHunts: Hunt[];
	completedHunts: Hunt[];
}