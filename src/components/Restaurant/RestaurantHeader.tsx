import React, { FC } from "react";
import styled from "styled-components";
import { TRestaurantProps } from "./Restaurant";

const RestaurantHeader: FC<TRestaurantProps> = ({
	name,
	rating,
	categories,
	price,
	is_closed
}) => (
	<StyledHeader>
		<h1 className="name">{name}</h1>
		<div>{rating}</div>
		<div className="details">
			<div>{categories && categories[0] ? categories[0].title : ""}</div>
			<div className="price">{price}</div>
			<div
				className={`open-indicator ${
					is_closed ? "open-indicator--closed" : ""
				}`}
			>
				{is_closed ? "CLOSED" : "OPEN NOW"}
			</div>
		</div>
	</StyledHeader>
);

export default RestaurantHeader;

const StyledHeader = styled.section`
	.name {
		/* Really weird line-clamp rules from David DeSandro */
		/* https://css-tricks.com/line-clampin/ */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		/* This should cut off  */

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
`;
