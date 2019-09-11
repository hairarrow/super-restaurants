import React, { FC } from "react";
import { Link } from "react-router-dom";
import { business_business } from "../../graphql/queries/types/business";
import Button from "../Button";
import StyledRestaurant from "./Restaurant.styled";
import RestaurantHeader from "./RestaurantHeader";

export type TRestaurantProps = Pick<
	business_business,
	"id" | "name" | "price" | "rating" | "photos" | "is_closed" | "categories"
>;

const Restaurant: FC<TRestaurantProps> = (props) => (
	<StyledRestaurant>
		<aside>
			{props.photos && (
				<img alt={props.name!} src={props.photos[0] ? props.photos[0] : ""} />
			)}
		</aside>
		<RestaurantHeader {...props} />
		<Link to={`/${props.id}`} className="cta">
			<Button className="cta__button">Learn More</Button>
		</Link>
	</StyledRestaurant>
);

export default Restaurant;
