// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const { SpecReporter } = require('jasmine-spec-reporter');
const chrome = require('./e2e/config/chrome.config').config;
const firefox = require('./e2e/config/firefox.config').config;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  // suites: {
  //   survey_list: '../pages/survey_list/survey_list.js',
  //   export_queue: '../pages/export_queue/export_queue.js'
  // },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--lang=en', '--window-size=1300,1056', 'disable-infobars']
    },
    maxInstances: 5,
    requireWindowFocus: false
  },
  directConnect: true,
  baseUrl: 'http://localhost:5000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
