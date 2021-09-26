import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: "#svelte",

		vite: {
			ssr: {
				external: ["firebase"],
			},

			resolve: {
				alias: {
					"@style": path.resolve("./src/style"),
					"@utils": path.resolve("./src/utils"),
					"@store": path.resolve("./src/store"),
					"@config": path.resolve("./src/config"),
					"@components": path.resolve("./src/components"),
				},
			},
		},
	},
};

export default config;
