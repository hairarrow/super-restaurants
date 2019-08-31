import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<h1>App</h1>
	</ThemeProvider>
);

export default App;
