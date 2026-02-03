import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
// could configure vite-plugin-babel with reactRouter plugin https://react.dev/learn/react-compiler/installation
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		checker({
			typescript: true,
			biome: {
				command: "check",
			},
		}),
	],
});
