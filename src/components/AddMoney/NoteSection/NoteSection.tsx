import React, {useRef} from 'react';
import {Icon} from "../../Icon";
import {Wrapper} from './NoteSection.styles';

type Props = {
	value: string
	onChange: (value: string) => void
}
export const NoteSection: React.FC<Props> = (props) => {
	const note = props.value
	const refInput = useRef<HTMLInputElement>(null)!
	const onBlur = () => {
		if (refInput !== null && refInput && refInput.current) {
			props.onChange(refInput.current.value)
		}
	}

	return (
		<Wrapper>
				<span><Icon name='write'/></span>
				<input
					type="text"
					placeholder="Add notes here"
					ref={refInput}
					defaultValue={note}
					onBlur={onBlur}/>
		</Wrapper>
	)
}
