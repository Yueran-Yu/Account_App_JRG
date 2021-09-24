import React, {createContext, ReactNode, useEffect, useState} from 'react';
// import {useUpdate} from "../hooks/useUpdate";

export const CollectedDataContext = createContext<ContextType | []>([])

const CollectedDataProvider: React.FC<ReactNode> = ({children}) => {

	const [collectedData, setCollectedData] = useState<CollectedData[]>([]);

	useEffect(() => {
		setCollectedData(JSON.parse(window.localStorage.getItem('collectedData') || '[]'))
	}, [])

	useEffect(() => { window.localStorage.setItem('collectedData', JSON.stringify(collectedData))}, [collectedData])
	// useUpdate(() => {
	// 	window.localStorage.setItem('collectedData', JSON.stringify(collectedData))
	// }, collectedData)

	const addCollectedData = (fiveSelectedItems: CollectedData) => {

		if (fiveSelectedItems.tagsId.length === 0) {
			alert('Please Select Tags')
			return false
		} else {
			setCollectedData([...collectedData, fiveSelectedItems])
			return true
		}
	}
	// return {collectedData, addCollectedData}


	return (
		<CollectedDataContext.Provider value={{collectedData, addCollectedData}}>
			{children}
		</CollectedDataContext.Provider>

	)
};

export default CollectedDataProvider;