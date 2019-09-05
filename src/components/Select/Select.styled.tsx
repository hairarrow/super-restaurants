import styled from "styled-components";

const StyledSelect = styled.div`
	position: relative;

	select {
		padding-right: 24px;
		width: 100%;
		padding-bottom: 8px;
		padding-top: 8px;
		appearance: none;
		border: none;
		box-shadow: none;
		background: transparent;
		background-image: none;
		font-size: inherit;
		border-radius: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		color: ${({ theme }) => theme.accent};
		cursor: pointer;
	}

	&:after {
		content: "";
		width: 16px;
		height: 16px;
		display: block;
		position: absolute;
		top: 8px;
		right: 0;
		color: rgba(0, 0, 0, 0.2);
		border-bottom: 2px solid;
		border-right: 2px solid;
		transform: rotate(45deg) scale(0.5);
		transition: transform 120ms ease;
	}

	&.showing-options:after {
		transform: rotate(225deg) scale(0.5);
	}

	@keyframes appear {
		0% {
			transform: translateY(50%);
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.select-options {
		position: absolute;
		top: 35px;
		padding: 16px;
		background: red;
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.2);
		box-shadow: 0 6px 6px rgba(0, 0, 0, 0.1);
		opacity: 0;
		animation: appear 250ms ease forwards;
	}
`;

export default StyledSelect;
