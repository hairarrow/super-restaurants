import React from "react";
import { storiesOf } from "@storybook/react";
import App from "./App";

const story = storiesOf("App", module);

story.add("Default", () => <App />);
