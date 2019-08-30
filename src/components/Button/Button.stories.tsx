import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import Button from "./Button";

storiesOf("Button", module)
	.addDecorator(centered)
	.add("Default", () => {
		const buttonText = text("Button Text", "Click Me!");
		return <Button>{buttonText}</Button>;
	});
