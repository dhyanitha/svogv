const fs = require('fs');
const path = require('path');

// Load ts-node to be able to execute TypeScript files with protractor.
require('ts-node').register({
  project: path.join(__dirname, '../demo/')
});


const DEMO_BASE_URL = process.env['DEMO_BASE_URL'] || 'http://localhost:4200';
const config = {
  useAllAngular2AppRoots: true,
  specs: [ path.join(__dirname, '../demo/**/*.demo.ts') ],
  baseUrl: E2E_BASE_URL,
  allScriptsTimeout: 120000,
  getPageTimeout: 120000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },

  plugins: [
    {
      // Runs the axe-core accessibility checks each time the e2e page changes and
      // Angular is ready.
      path: '../tools/axe-protractor/axe-protractor.js',

      rules: [
        // Exclude md-menu elements because those are empty if not active.
        { id: 'aria-required-children', selector: '*:not(md-menu)' },

        // Disable color constrast checks since the final colors will vary based on the theme.
        { id: 'color-contrast', enabled: false },
      ]
    }
  ]
};

// We are currently not on saucelabs
// if (process.env['TRAVIS']) {
//   const key = require('../scripts/saucelabs/sauce_config');
//   config.sauceUser = process.env['SAUCE_USERNAME'];
//   config.sauceKey = key;
//   config.capabilities = {
//     'browserName': 'chrome',
//     'tunnel-identifier': process.env['TRAVIS_JOB_NUMBER'],
//     'build': process.env['TRAVIS_JOB_NUMBER'],
//     'name': 'SVOGV DEMO Tests',

//     // By default Saucelabs tries to record the whole e2e run. This can slow down the builds.
//     'recordVideo': false,
//     'recordScreenshots': false
//   };
// }


exports.config = config;