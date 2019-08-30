require("dotenv").config();

module.exports = {
	client: {
		service: {
			name: "yelp",
			url: process.env.API_HOST,
			headers: {
				authorization: `Bearer ${process.env.API_SECRET}`
			}
		}
	}
};
