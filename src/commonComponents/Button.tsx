import * as React from 'react';
import styled from 'styled-components';
import { buttonBlue } from '../utility/colors';

const Button = (props: Props) => {
	return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

interface Props {
	onClick: () => void;
	text: string;
}

export default Button;

const StyledButton = styled.button`
	height: 36px;
	color: white;
	background-color: ${buttonBlue};
`;
