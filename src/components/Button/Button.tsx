import React, { FC, HTMLProps } from "react";
import StyledButton from "./Button.styled";

type ButtonVariant = "default" | "light";

export interface IButtonProps {
	variant?: ButtonVariant;
	disabled?: boolean;
}

const Button: FC<IButtonProps & HTMLProps<HTMLButtonElement>> = ({
	variant = "default",
	disabled = false,
	children,
	className
}) => (
	<StyledButton
		className={`button--${variant} ${className}`}
		disabled={disabled}
	>
		{children}
	</StyledButton>
);

export default Button;
