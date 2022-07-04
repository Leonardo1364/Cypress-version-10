import {defineConfig} from "cypress";

export default defineConfig({

  projectId: '128076ed-9868-4e98-9cef-98dd8b705d75',
  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents(on, config) {

      // return require('./cypress/plugins/index.ts')(on, config)
    },

    baseUrl: 'http://covenant-portal-frontend.kb8s.hml.dimed.com.br/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    video: true,
    videoCompression: 15,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
  },

  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 30000,
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  supportFolder: 'cypress/support',
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
});
