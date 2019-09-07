import React, { FC } from "react";
import { oc } from "ts-optchain";
import { business } from "../../graphql/queries/types/Business";
import Container from "../Container";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantDetail: FC<business> = (props) => {
	const dataChain = oc(props);
	const business = dataChain.business();

	if (!business) return <h1 style={{ color: "#f00" }}>ERROR</h1>;

	return (
		<main>
			<Container
				style={{
					paddingTop: 36,
					paddingBottom: 36,
					width: "100%",
					fontSize: 40
				}}
			>
				<RestaurantHeader {...business} />
			</Container>
			<div
				style={{
					paddingTop: 36,
					paddingBottom: 36,
					width: "100%",
					borderTop: "1px solid rgba(0, 0, 0, 0.2)",
					borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
				}}
			>
				<Container>
					<div
						style={{
							height: "30vh",
							display: "grid",
							gridGap: 16,
							gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"
						}}
					>
						{business.photos &&
							business.photos.map((photo) => (
								<img
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
									key={photo!}
									alt={business.name!}
									src={photo!}
								/>
							))}
					</div>
					{business.location && (
						<p style={{ fontSize: 20, paddingTop: 16 }}>
							{business.location.formatted_address}
						</p>
					)}
				</Container>
			</div>
			<Container
				style={{
					paddingTop: 36,
					paddingBottom: 36,
					width: "100%"
				}}
			>
				<h2 style={{ fontWeight: 400 }}>
					{business.review_count} Review{business.review_count! >= 2 ? "s" : ""}
				</h2>
			</Container>
		</main>
	);
};

export default RestaurantDetail;
