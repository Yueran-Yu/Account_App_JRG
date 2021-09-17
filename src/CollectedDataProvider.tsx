import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {useUpdate} from "./components/hooks/useUpdate";

const CollectedDataContext = createContext<CollectedData | null>(null)

const CollectedDataProvider: React.FC<ReactNode> = ({children}) => {

	const [colle, setColleD] = useState<CollectedData[]>([]);

	useEffect(() => {
		setColleD(JSON.parse(window.localStorage.getItem('collectedData') || '[]'))
	}, [])


	useUpdate(() => {
		window.localStorage.setItem('collectedData', JSON.stringify(colle))
	}, colle)

	const addCollectedData = (fiveSelectedItems: CollectedData) => {

		if (fiveSelectedItems.tagsId.length === 0) {
			alert('Please Select Tags')
			return false
		} else {
			setColleD([...colle, fiveSelectedItems])
			return true
		}
	}
	// return {collectedData, addCollectedData}


	return (
		<CollectedDataContext.Provider value={null}>
			{children}
		</CollectedDataContext.Provider>

	)
};

export default CollectedDataProvider;