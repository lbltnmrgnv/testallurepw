import type { TestStatus } from "@playwright/test";
import { Status } from "allure-js-commons";
import {getFailedTests} from "./failedTests";

export const statusToAllureStats = (status: TestStatus, expectedStatus: TestStatus, testName: string): Status => {
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
