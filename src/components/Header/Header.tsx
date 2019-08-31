import React, { FC } from "react";
import StyledHeader from "./Header.styled";

export interface IHeaderProps {
	title: string;
}

const Header: FC<IHeaderProps> = ({ title, children }) => (
	<StyledHeader className="header">
		<h1 className="header__title">{title}</h1>
		{children}
	</StyledHeader>
);

export default Header;
