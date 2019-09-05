import styled from "styled-components";

const RestaurantList = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));
	grid-gap: 80px 32px;
	justify-items: center;
`;

export default RestaurantList;
