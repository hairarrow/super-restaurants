export interface ITheme {
	fg: string;
	bg: string;
	accent: string;
	green: string;
	red: string;
	lightFg: string;
	lightBg: string;
	space: (n?: number) => string;
}

const theme: ITheme = {
	fg: "#131313",
	bg: "#fcfcfc",
	accent: "#002B56",
	green: "#00E8A4",
	red: "#FF3548",
	lightFg: "#666666",
	lightBg: "#fff",
	space: (n = 1) => `${n * 8}px`
};

export const invertTheme = ({
	fg,
	bg,
	lightFg,
	lightBg,
	...rest
}: ITheme): ITheme => ({
	...rest,
	bg: fg,
	fg: bg,
	lightFg: lightBg,
	lightBg: lightFg
});

export const darkTheme = invertTheme(theme);

export default theme;
