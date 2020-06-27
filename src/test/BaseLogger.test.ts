import { Loglestial } from "..";
import { BaseLogger } from "../utils/BaseLogger";

export class BaseLoggerTest {
  logger: BaseLogger;
  testMessage: string;
  testStack: any;

  constructor(testMessage: string, testStack?: any) {
    this.logger = Loglestial.init({logToFile:true});
    this.testMessage = testMessage;
    this.testStack = testStack;
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
