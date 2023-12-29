import daisyui from "daisyui";

const config = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/**/*.{html,js,jsx}",
    "./public/**/*.{html,js,jsx}",
  ],

  plugins: [daisyui],
};
export default config;
