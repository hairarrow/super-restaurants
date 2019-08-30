import React, { FC } from "react";
import StyledButton from "./Button.styled";

type ButtonVariant = "default" | "light";

export interface IButtonProps {
	variant?: ButtonVariant;
	disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
	variant = "default",
	disabled = false,
	children
}) => (
	<StyledButton className={`button--${variant}`} disabled={disabled}>
		{children}
	</StyledButton>
);

export default Button;
