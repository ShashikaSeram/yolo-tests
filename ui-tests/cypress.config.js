const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    // defaultCommandTimeout: 8000
    env: {
      hub88_url: 'https://hub88.io/'
    }
  },
});
