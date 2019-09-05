import centered from "@storybook/addon-centered/react";
import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import Select from "./Select";

const story = storiesOf("Select", module);

story.addDecorator(centered);

const StorySelect = () => {
	const options = [
		{ value: "0", label: "One thing" },
		{ value: "1", label: "Some different thing" }
	];
	const [value, setValue] = useState(options[1].value);
	const handleChange = useCallback((e) => setValue(e), [setValue]);

	return <Select options={options} value={value} onChange={handleChange} />;
};

story.add("Default", () => <StorySelect />);
