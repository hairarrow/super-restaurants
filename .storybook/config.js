import { addParameters, addDecorator, configure } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import results from "../jest-test-results.json";
import theme, { darkTheme } from "../src/components/Theme";

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withTests({ results }));
addDecorator(withThemesProvider([theme, darkTheme]));

addParameters({
	options: {
		theme: themes.light
	}
});

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
