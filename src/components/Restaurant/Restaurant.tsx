import React, { FC } from "react";
import { business_business } from "../../graphql/queries/types/Business";

const Restaurant: FC<business_business> = ({
	name,
	price,
	rating,
	photos,
	is_closed,
	categories
}) => (
	<article>
		<aside>{photos && <img src={photos[0] ? photos[0] : ""} />}</aside>
		<section>
			<h1>{name}</h1>
			<div>{rating}</div>
			<div>
				<div>{categories && categories[0] ? categories[0].title : ""}</div>
				<div>{price}</div>
				<div>{is_closed ? "CLOSED" : "OPEN NOW"}</div>
			</div>
		</section>
	</article>
);

export default Restaurant;
