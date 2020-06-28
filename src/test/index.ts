import { BaseLoggerTest } from "./BaseLogger.test";
import { FileLoggerTest } from "./FileLogger.test";

const testMessage = "Testing Loglestial, Lorum Ipsum";
const testStack = {
  details: "Testing Loglestial, Lorum Ipsum",
};

const baseLogger = new BaseLoggerTest(testMessage, testStack);
baseLogger.testLog();
baseLogger.testInfo();
baseLogger.testError();
baseLogger.testDebug();

const fileLogger = new FileLoggerTest(testMessage);
fileLogger.testLog();
fileLogger.testInfo();
fileLogger.testError();
fileLogger.testDebug();
