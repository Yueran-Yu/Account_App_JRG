import React from 'react';
// TreeShaking is not applicable to 'require'
// require('icons/tags.svg');
// require('icons/dollars.svg');
// require('icons/statistics.svg');

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);


try {
	importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
	console.log(error)
}


type Props = {
	name?: string
}

export const Icon = ({name}: Props) => {
	return (
		<svg className='icon'>
			{name && <use xlinkHref={'#' + name}/>}
		</svg>
	)
}
