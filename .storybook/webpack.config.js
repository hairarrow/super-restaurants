module.exports = async ({ config }) => ({
	...config,
	node: { fs: "empty" }
});
