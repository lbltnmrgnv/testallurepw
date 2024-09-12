import { Status } from "allure-js-commons";
import { getFailedTests } from "./failedTests";
export var statusToAllureStats = function statusToAllureStats(status, expectedStatus, testName) {
  console.log(Status);
  if (status === "skipped") {
    return Status.SKIPPED;
  }
  if (status === "timedOut") {
    return Status.BROKEN;
  }
  if (status === expectedStatus) {
    return Status.PASSED;
  }
  if (status === 'failed' && getFailedTests().includes(testName)) {
    return Status.EXPECTEDLY_FAILED;
  }
  return Status.FAILED;
};
//# sourceMappingURL=utils.js.map