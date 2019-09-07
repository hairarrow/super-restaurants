import styled from "styled-components";

const StyledRestaurant = styled.article`
	height: 400px;
	display: flex;
	flex-direction: column;

	aside {
		height: 228px;
		background: #d8d8d8;
	}

	aside img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cta {
		width: 100%;
		margin-top: auto;

		&__button {
			width: 100%;
			font-weight: 600;
		}
	}
`;

export default StyledRestaurant;
