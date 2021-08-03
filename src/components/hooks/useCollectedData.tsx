import {useState} from 'react';

type CollectedData = {
	tagsId: number[]
	note: string
	category: '+' | '-'
	amount: number
}
export const useCollectedData = () => {
	const [collectedData, setCollectedData] = useState<CollectedData[]>([]);
	const addCollectedData = (fourCollectedItems: CollectedData) => {
		setCollectedData([...collectedData, fourCollectedItems])
	}
	return {collectedData, addCollectedData}
}