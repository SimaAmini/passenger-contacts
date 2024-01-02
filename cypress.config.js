const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: "http://localhost:3000/",
      MAIN_URL: "http://localhost:1337/",
    },
  },
});
