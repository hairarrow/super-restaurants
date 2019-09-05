import centered from "@storybook/addon-centered/react";
import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import Checkbox from "./Checkbox";

const StoryCheckbox = () => {
	const [checked, setChecked] = useState(false);
	const handleChange = useCallback(() => setChecked(!checked), [
		checked,
		setChecked
	]);

	return (
		<Checkbox onChange={handleChange} checked={checked} label="Open Now" />
	);
};
const story = storiesOf("Checkbox", module);

story.addDecorator(centered);

story.add("Default", () => <StoryCheckbox />);
