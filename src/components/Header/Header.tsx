import React, { FC } from "react";

export interface IHeaderProps {
	title: string;
}

const Header: FC<IHeaderProps> = ({ title, children }) => {
	return (
		<header>
			<h1 className="header__title">{title}</h1>
			{children}
		</header>
	);
};

export default Header;
