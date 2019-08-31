module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	setupFilesAfterEnv: ["./src/testHelpers/setupTests.js"]
};
