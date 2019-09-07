import React, { FC, HTMLProps } from "react";
import styled from "styled-components";
import { TRestaurantProps } from "./Restaurant";

const RestaurantHeader: FC<
	TRestaurantProps & Pick<HTMLProps<HTMLElement>, "style" | "className">
> = ({ name, rating, categories, price, is_closed, style, className }) => (
	<StyledHeader className={className} style={style}>
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
		font-size: 1.25em;
		line-height: 1.75em;
		font-weight: 400;
	}

	.details {
		margin: 0.5em 0;
		display: flex;
		text-transform: uppercase;
		font-size: 0.75em;
		color: ${({ theme }) => theme.mutedFg};
	}

	.price {
		margin-left: 0.5em;
		margin-right: auto;

		&:before {
			content: "•";
			display: inline-block;
			padding-right: 0.5em;
			transform: translateY(-1px);
		}
	}

	.open-indicator {
		display: flex;
		align-items: center;

		&:before {
			content: "";
			display: inline-block;
			margin-right: 0.5em;
			width: 0.5em;
			height: 0.5em;
			border-radius: 0.5em;
			background: ${({ theme }) => theme.green};
		}

		&--closed:before {
			background: ${({ theme }) => theme.red};
		}
	}
`;
