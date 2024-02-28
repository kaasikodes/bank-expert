import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), nodePolyfills()],

  // TODO: update baseUrl and paths and ensure it follows the import pattern stated
  // baseUrl: "./src",
  // paths: {
  //   "~~/*": ["./src/*"]
  // }
});
