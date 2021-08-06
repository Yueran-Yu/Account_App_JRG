import {useState, useEffect} from 'react';
import {useUpdate} from "./useUpdate";

type CollectedData = {
	tagsId: number[]
	note: string
	date: Date
	category: '+' | '-'
	amount: number
}

// this is the method of omit one or more properties in the type CollectedData
// type newCollectedItems = Omit<CollectedData, 'date'>


export const useCollectedData = () => {
	const [collectedData, setCollectedData] = useState<CollectedData[]>([]);


	useEffect(() => {
		setCollectedData(JSON.parse(window.localStorage.getItem('collectedData') || '[]'))
	}, [])


	useUpdate(() => {
		window.localStorage.setItem('collectedData', JSON.stringify(collectedData))
	}, [collectedData])


	const addCollectedData = (fiveSelectedItems: CollectedData) => {
		if (fiveSelectedItems.tagsId.length === 0) {
			alert('Please Select Tags')
			return false
		}
		setCollectedData([...collectedData, fiveSelectedItems])
	}


	return {collectedData, addCollectedData}
}