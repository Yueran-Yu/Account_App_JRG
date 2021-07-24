import styled from 'styled-components';
import React, {useRef} from 'react';
import {Icon} from "../Icon";

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 80%;
  > span {
    margin-right: 6px;
    white-space: nowrap;

    .icon {
      fill: #5678de;
    }
  }

  input {
    display: block;
    width: 100%;
    background: none;
    border: none;

    ::placeholder {
      color: #bebebe;
      font-family: fantasy;
    }
  }
`

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
