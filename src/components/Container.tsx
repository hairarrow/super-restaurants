import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

const Container: FC<HTMLProps<HTMLDivElement>> = ({
	children,
	className,
	...props
}) => (
	<div className={className} {...props}>
		{children}
	</div>
);

export default styled(Container)`
	max-width: 1312px;
	margin: auto;
`;
