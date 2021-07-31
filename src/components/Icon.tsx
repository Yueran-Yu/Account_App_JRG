import React from 'react';
import cs from 'classnames';
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
} & React.SVGAttributes<SVGElement>

export const Icon = ({name, children, className, ...rest}: Props) => {
	return (
		<svg className={cs('icon', className)} {...rest}>
			{name && <use xlinkHref={'#' + name}/>}
		</svg>
	)
}
