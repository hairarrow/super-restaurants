import React, { FC } from "react";
import { Link } from "react-router-dom";
import { business_business } from "../../graphql/queries/types/Business";
import Button from "../Button";
import StyledRestaurant from "./Restaurant.styled";

export type TRestaurantProps = Pick<
	business_business,
	"id" | "name" | "price" | "rating" | "photos" | "is_closed" | "categories"
>;

const Restaurant: FC<TRestaurantProps> = ({
	id,
	name,
	price,
	rating,
	photos,
	is_closed,
	categories
}) => (
	<StyledRestaurant>
		<aside>
			{photos && <img alt={name!} src={photos[0] ? photos[0] : ""} />}
		</aside>
		<section>
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
		</section>
		<Link to={`/${id}`} className="cta">
			<Button className="cta__button">Learn More</Button>
		</Link>
	</StyledRestaurant>
);

export default Restaurant;
