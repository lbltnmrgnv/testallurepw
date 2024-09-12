import { Status } from "allure-js-commons";
import { getFailedTests } from "./failedTests";
export var statusToAllureStats = function statusToAllureStats(status, expectedStatus, testName) {
  if (status === "skipped") {
    return Status.SKIPPED;
  }
  if (status === "timedOut") {
    return Status.BROKEN;
  }
  if (status === expectedStatus) {
    return Status.PASSED;
  }
  console.log(testName);
  if (status === 'failed' && getFailedTests().includes(testName)) {
    return Status.EXPECTEDLY_FAILED;
  }
  return Status.FAILED;
};
//# sourceMappingURL=utils.js.map