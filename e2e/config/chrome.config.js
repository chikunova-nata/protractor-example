'use strict';

exports.config = chromeConfig();

function chromeConfig() {
  return {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--lang=en', '--window-size=1300,1056', 'disable-infobars', '--disable-extensions --disable-plugins --disable-web-security']
    },
    maxInstances: 5,
    requireWindowFocus: true
  };
}
