import path from "path";
import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: "#svelte",
		adapter: vercel(),
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
					"@actions": path.resolve("./src/actions"),
					"@components": path.resolve("./src/components"),
				},
			},
		},
	},
};

export default config;
