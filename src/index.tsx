import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss';

export const CollectedDataContext = createContext(null)
ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

