import {useState, useEffect} from 'react';
import {useUpdate} from "./useUpdate";

type CollectedData = {
	tagsId: number[]
	note: string
	date: Date
	category: '+' | '-'
	amount: number
}
export const useCollectedData = () => {
	const [collectedData, setCollectedData] = useState<CollectedData[]>([]);


	useEffect(() => {
		setCollectedData(JSON.parse(window.localStorage.getItem('collectedData') || '[]'))
	}, [])


	useUpdate(() => {
		window.localStorage.setItem('collectedData', JSON.stringify(collectedData))
	}, [collectedData])


	const addCollectedData = (fourCollectedItems: CollectedData) => {
		setCollectedData([...collectedData, fourCollectedItems])
	}


	return {collectedData, addCollectedData}
}