export interface ITheme {
	fg: string;
	bg: string;
	accent: string;
	green: string;
	red: string;
}

const theme: ITheme = {
	fg: "#131313",
	bg: "#fcfcfc",
	accent: "#002B56",
	green: "#00E8A4",
	red: "#FF3548"
};

export const invertTheme = ({ fg, bg, ...rest }: ITheme): ITheme => ({
	...rest,
	bg: fg,
	fg: bg
});

export const darkTheme = invertTheme(theme);

export default theme;
