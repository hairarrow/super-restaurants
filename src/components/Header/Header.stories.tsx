import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import Header from "./Header";

const story = storiesOf("Header", module);

story.addDecorator(centered);

story.add("Default", () => {
	const title = text("Title", "Restaurants");
	return <Header title={title} />;
});
