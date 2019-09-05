import styled from "styled-components";

const StyledCheckbox = styled.div`
	/* Hide the default checkbox without loosing accessibility */
	display: flex;
	position: relative;
	padding-left: 8px;
	padding-top: 8px;
	padding-bottom: 8px;
	transition: opacity 120ms ease;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	input[type="checkbox"] {
		visibility: hidden;
		opacity: 0;
	}

	label {
		display: flex;
		color: ${({ theme }) => theme.accent};
		cursor: inherit;

		&:before {
			content: "";
			position: absolute;
			left: 0;
			display: inline-block;
			width: 16px;
			height: 16px;
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
			border-radius: 16px;
			background: #fff;
			transition: background 120ms ease;
		}

		&:after {
			content: "";
			position: absolute;
			display: inline-block;
			left: 0;
			width: 16px;
			height: 16px;
			border-radius: 16px;
			transform: scale(0);
			transform-origin: center center;
			background: ${({ theme }) => theme.accent};
			transition: transform 120ms ease;
		}
	}

	&:hover label:before {
		background: #eaeaea;
	}

	input[type="checkbox"]:checked + label:after {
		transform: scale(0.6);
	}
`;

export default StyledCheckbox;
