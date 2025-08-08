import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  daisyui: {
    themes: ["light", "dark"], // you can customize more
  },
});
// module.exports = {
//   darkMode: "class", // Enable class-based dark mode
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
