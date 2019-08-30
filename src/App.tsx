import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import "./App.css";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<h1>App</h1>
		</ThemeProvider>
	);
};

export default App;
