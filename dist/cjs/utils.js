"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusToAllureStats = void 0;
var _allureJsCommons = require("allure-js-commons");
var _failedTests = require("./failedTests");
var statusToAllureStats = exports.statusToAllureStats = function statusToAllureStats(status, expectedStatus, testName) {
  if (status === "skipped") {
    return _allureJsCommons.Status.SKIPPED;
  }
  if (status === "timedOut") {
    return _allureJsCommons.Status.BROKEN;
  }
  if (status === expectedStatus) {
    return _allureJsCommons.Status.PASSED;
  }
  if (status === 'failed' && (0, _failedTests.getFailedTests)().includes(testName)) {
    return _allureJsCommons.Status.EXPECTEDLY_FAILED;
  }
  return _allureJsCommons.Status.FAILED;
};
//# sourceMappingURL=utils.js.map