import {useState, useEffect} from 'react';
import {useUpdate} from "./useUpdate";


// this is the method of omit one or more properties in the type CollectedData
// type newCollectedItems = Omit<CollectedData, 'date'>

export const useCollectedData = () => {
	const [collected, setCollected] = useState<CollectedData[]>([]);

	useEffect(() => {
		setCollected(JSON.parse(window.localStorage.getItem('collectedData') || '[]'))
	}, [])


	useUpdate(() => {
		window.localStorage.setItem('collectedData', JSON.stringify(collected))
	}, collected)

	const addCollectedData = (fiveSelectedItems: CollectedData) => {

		if (fiveSelectedItems.tagsId.length === 0) {
			alert('Please Select Tags')
			return false
		} else {
			setCollected([...collected, fiveSelectedItems])
			return true
		}
	}
	return {collected, addCollectedData}
}