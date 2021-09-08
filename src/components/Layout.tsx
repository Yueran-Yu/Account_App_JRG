import React, {useLayoutEffect, useState} from 'react';
import Nav from "./Nav";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

interface WindowSize {
	width: number
	height: number
}

export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({width: 0, height: 0})

	useLayoutEffect(() => {
		function updateSize() {
			setWindowSize({width: window.innerWidth, height: window.innerHeight})
		}

		// set size at the first client-side load
		updateSize()
		window.addEventListener('resize', updateSize)

		//remove event listener on cleanup
		return () => {
			window.removeEventListener('resize', updateSize)
		}
	}, [])

	return windowSize
}

const Layout = ({children, className}: any) => {
	const {height} = useWindowSize()

	return (
		<Wrapper style={{height: height}}>
			<Main className={className}>
				{children}
			</Main>
			<Nav/>
		</Wrapper>
	)
}

export default Layout;