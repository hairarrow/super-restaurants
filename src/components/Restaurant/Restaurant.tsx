import React, { FC } from "react";
import { business_business } from "../../graphql/queries/types/Business";
import Button from "../Button";
import StyledRestaurant from "./Restaurant.styled";

export type TRestaurantProps = Pick<
	business_business,
	"name" | "price" | "rating" | "photos" | "is_closed" | "categories"
>;

const Restaurant: FC<TRestaurantProps> = ({
	name,
	price,
	rating,
	photos,
	is_closed,
	categories
}) => (
	<StyledRestaurant>
		<aside>{photos && <img src={photos[0] ? photos[0] : ""} />}</aside>
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
		<Button className="cta">Learn More</Button>
	</StyledRestaurant>
);

export default Restaurant;
