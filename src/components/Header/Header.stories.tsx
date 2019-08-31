import React from "react";
import centered from "@storybook/addon-centered/react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Header from "./Header";

const story = storiesOf("Header", module);

story.addDecorator(centered);

story.add("Default", () => {
	const title = text("Title", "Restaurants");
	const body = text(
		"Body",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	);

	return (
		<Header title={title}>
			<p>{body}</p>
		</Header>
	);
});
