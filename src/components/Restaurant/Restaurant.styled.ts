import styled from "styled-components";

const StyledRestaurant = styled.article`
	width: 304px;

	aside {
		height: 228px;
		background: #d8d8d8;
	}

	aside img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.name {
		margin: 8px 0;
		font-size: 20px;
		line-height: 28px;
		font-weight: 400;
	}

	.details {
		margin: 8px 0;
		display: flex;
		text-transform: uppercase;
		font-size: 12px;
		color: ${({ theme }) => theme.mutedFg};
	}

	.price {
		margin-left: 8px;
		margin-right: auto;

		&:before {
			content: "•";
			display: inline-block;
			padding-right: 8px;
			transform: translateY(-1px);
		}
	}

	.open-indicator {
		display: flex;
		align-items: center;

		&:before {
			content: "";
			display: inline-block;
			margin-right: 6px;
			width: 8px;
			height: 8px;
			border-radius: 8px;
			background: ${({ theme }) => theme.green};
		}

		&--closed:before {
			background: ${({ theme }) => theme.red};
		}
	}

	.cta {
		width: 100%;
		font-weight: 600;
	}
`;

export default StyledRestaurant;
