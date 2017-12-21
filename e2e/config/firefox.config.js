'use strict';

exports.config = firefoxConfig();

function firefoxConfig() {
  return {
    browserName: 'firefox',
    maxInstances: 5,
    requireWindowFocus: false
  };
}
