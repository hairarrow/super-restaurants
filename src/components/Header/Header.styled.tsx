import styled from "styled-components";

const StyledHeader = styled.header`
	& {
		max-width: 752px;
		font-size: 22px;
		line-height: 32px;
		color: ${({ theme }) => theme.lightFg};
	}

	.header__title {
		margin-bottom: ${({ theme }) => theme.space(3)};
		font-weight: 300;
		font-size: 2em;
		line-height: 64px;
		letter-spacing: 0.96px;
		color: ${({ theme }) => theme.fg};
	}
`;

export default StyledHeader;
