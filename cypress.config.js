const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.spec.js',
    video:true,
    videoCompression:32,
    reporter: 'mochawesome',
  },
});
