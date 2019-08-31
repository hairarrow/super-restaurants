import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Theme from "../Theme";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<ThemeProvider theme={Theme}>
			<Header title="Something">Something</Header>
		</ThemeProvider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

it("It renders without children", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<ThemeProvider theme={Theme}>
			<Header title="Something" />
		</ThemeProvider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

it("It mounts without a title", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<ThemeProvider theme={Theme}>
			<Header />
		</ThemeProvider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
