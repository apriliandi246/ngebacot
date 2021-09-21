module.exports = {
	root: true,
	extends: ["airbnb-base", "prettier", "plugin:import/recommended"],
	plugins: ["svelte3"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2019,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	settings: {
		"import/resolver": {
			alias: {
				map: [
					["@style", "./src/style"],
					["@utils", "./src/utils"],
					["@config", "./src/config"],
					["@components", "./src/components"],
				],
			},
		},
	},
};
