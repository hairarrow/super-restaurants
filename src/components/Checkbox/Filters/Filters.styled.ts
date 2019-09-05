import styled from "styled-components";

const StyledFilters = styled.form`
	& > *:not(:last-child) {
		margin-right: 24px;
	}

	.filters-open {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
`;

export default StyledFilters;
