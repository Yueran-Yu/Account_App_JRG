import React, {ChangeEventHandler} from 'react';
import {Icon} from "../../Icon";
import {InputForm} from "../../InputForm";

type Props = {
	value: string
	onChange: (value: string) => void
}
export const NoteSection: React.FC<Props> = (props) => {
	const note = props.value
	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		props.onChange(e.target.value)
	}

	return (
		<InputForm
			type="text"
			placeholder="Add notes here"
			value={note}
			onChange={onChange}
			label='right'>
			<Icon name='write'/>
		</InputForm>
	)
}
