import styled from "styled-components";

const StyledButton = styled.button`
	min-height: 38px;
	color: ${({ theme }: any) => theme.bg};
	background: ${({ theme }: any) => theme.accent};
	padding-left: 16px;
	padding-right: 16px;
	border: 1px solid transparent;
	text-transform: uppercase;
	transition: background 120ms ease, border 120ms ease, opacity 120ms ease;

	&:hover:not([disabled]) {
		color: ${({ theme }: any) => theme.accent};
		background: ${({ theme }: any) => theme.bg};
		border-color: inherit;
	}

	&:active {
		opacity: 0.8;
	}

	&[disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}

	&:hover:not([disabled]) {
		cursor: pointer;
	}

	&.button--light {
		color: ${({ theme }: any) => theme.fg};
		background: #fff;
	}
`;

export default StyledButton;
