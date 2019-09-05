import centered from "@storybook/addon-centered/react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Restaurant from "./Restaurant";

const story = storiesOf("Restaurant", module);

story.addDecorator(centered);

story.add("Default", () => (
	<Restaurant
		name="Mon Ami Gabi"
		price="$$"
		rating={4}
		photos={[
			"https://s3-media3.fl.yelpcdn.com/bphoto/ja1-oE6RiIWorNzty-A4Eg/o.jpg"
		]}
		is_closed={false}
		categories={[{ title: "French", alias: "french", __typename: "Category" }]}
	/>
));
