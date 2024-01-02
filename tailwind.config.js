import daisyui from "daisyui";

const config = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],

  plugins: [daisyui],
  daisyui: {
    themes: ["dim"],
  },
};
export default config;
