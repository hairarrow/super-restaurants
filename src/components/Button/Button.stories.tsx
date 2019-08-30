import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import Button from "./Button";

storiesOf("Button", module)
	.addDecorator(centered)
	.add("Default", () => {
		const buttonText = text("Button Text", "Click Me!");
		const disabled = boolean("Disabled", false);
		const variants = { Default: "default", Light: "light" };
		const variant = select<any>("Variant", variants, "default");
		return (
			<Button variant={variant} disabled={disabled}>
				{buttonText}
			</Button>
		);
	});
