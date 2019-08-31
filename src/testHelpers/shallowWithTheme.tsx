import { mount, render, shallow } from "enzyme";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../components/Theme";

export const mountWithTheme = (children: any) =>
	mount(<ThemeProvider theme={Theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: any) =>
	render(<ThemeProvider theme={Theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: any) =>
	shallow(<ThemeProvider theme={Theme}>{children}</ThemeProvider>);
