import styled from "styled-components";
import React from 'react';

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

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
			font-size: 15px;
      font-family: "Arial Narrow",serif;
    }
  }
`

type Props = {
	label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const InputForm: React.FC<Props> = (props) => {
	const {children, ...rest} = props
	return (
		<Label>
			<span>{children}</span>
			<input{...rest}/>
		</Label>
	)
}