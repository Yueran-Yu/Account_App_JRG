import React, {createContext, ReactNode} from 'react';
import {CollectedData, useCollectedData} from "./components/hooks/useCollectedData";

const CollectedDataContext = createContext<CollectedData | null>(null)

const CollectedDataProvider: React.FC<ReactNode> = ({children}) => {


	return (
		<CollectedDataContext.Provider value={null}>
			{children}
		</CollectedDataContext.Provider>

	)
};

export default CollectedDataProvider;