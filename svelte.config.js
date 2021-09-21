import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: "#svelte",

		vite: {
			resolve: {
				alias: {
					"@style": path.resolve("./src/style"),
					"@utils": path.resolve("./src/utils"),
					"@config": path.resolve("./src/config"),
					"@components": path.resolve("./src/components"),
				},
			},
		},
	},
};

export default config;
