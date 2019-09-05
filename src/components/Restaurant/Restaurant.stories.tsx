import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Restaurant from "./Restaurant";
import RestaurantList from "./RestaurantList";

const story = storiesOf("Restaurant", module);

story.add("Default", () => (
	<BrowserRouter>
		<Restaurant
			id="monami"
			name="Mon Ami Gabi"
			price="$$"
			rating={4}
			photos={[
				"https://s3-media3.fl.yelpcdn.com/bphoto/ja1-oE6RiIWorNzty-A4Eg/o.jpg"
			]}
			is_closed={false}
			categories={[
				{ title: "French", alias: "french", __typename: "Category" }
			]}
		/>
	</BrowserRouter>
));

story.add("Restaurant List", () => (
	<BrowserRouter>
		<RestaurantList>
			{[...Array(16)]
				.map((_, id) => ({
					id: id.toString(),
					name: "Mon Ami Gabi",
					price: "$$",
					rating: 4,
					photos: [
						"https://s3-media3.fl.yelpcdn.com/bphoto/ja1-oE6RiIWorNzty-A4Eg/o.jpg"
					],
					is_closed: false,
					categories: [
						{ title: "French", alias: "french", __typename: "Category" }
					]
				}))
				.map((restaurant) => (
					<Restaurant key={restaurant.id} {...restaurant} />
				))}
		</RestaurantList>
	</BrowserRouter>
));
