import { BaseLoggerTest } from "./BaseLogger.test";

const testMessage = "Testing Loglestial";
const testStack = {
  details: "Testing Loglestial",
};

const baseLogger = new BaseLoggerTest(testMessage, testStack);
baseLogger.testLog();
baseLogger.testInfo();
baseLogger.testError();
baseLogger.testDebug();
