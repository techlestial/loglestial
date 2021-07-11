import Loglestial from "..";
import { Logger } from "../loggers/Logger";

export class BaseLoggerTest {
  logger: Logger;
  testMessage: string;
  testStack: any;

  constructor(testMessage: string, testStack?: any) {
    this.logger = Loglestial.init();
    this.testMessage = testMessage;
    this.testStack = testStack;
    console.log("\r\n###---Testing BaseLogger functions---###\r\n");
  }

  testDebug() {
    console.log("\r\n###---Testing Debug function---###\r\n");
    this.logger.debug(this.testMessage, this.testStack);
  }

  testLog() {
    console.log("\r\n###---Testing Log function---###\r\n");
    this.logger.log(this.testMessage, this.testStack);
  }

  testError() {
    console.log("\r\n###---Testing Error function---###\r\n");
    this.logger.error(this.testMessage, this.testStack);
  }

  testInfo() {
    console.log("\r\n###---Testing Info function---###\r\n");
    this.logger.info(this.testMessage, this.testStack);
  }
}
