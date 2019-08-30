import { addParameters, addDecorator, configure } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import results from "../jest-test-results.json";

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withTests({ results }));

addParameters({
	options: {
		theme: themes.dark
	}
});

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
