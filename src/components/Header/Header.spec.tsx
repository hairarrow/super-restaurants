import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Header title="Something">Something</Header>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("It renders without children", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Header title="Something" />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("It mounts without a title", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Header />, div);
	ReactDOM.unmountComponentAtNode(div);
});
