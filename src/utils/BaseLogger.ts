import { Log } from "../models/Log.model";

export class BaseLogger {
  constructor() {}

  log = (message: string, stack?: any) => {
    this.writeToConsole(new Log("LOG", message, stack));
  };

  debug = (message: string, stack?: any) => {
    this.writeToConsole(new Log("DEBUG", message, stack));
  };

  error = (message: string, stack?: any) => {
    this.writeToConsole(new Log("ERROR", message, stack));
  };

  info = (message: string, stack?: any) => {
    this.writeToConsole(new Log("INFO", message, stack));
  };

  private writeToConsole = (log: Log) => {
    switch (log.type) {
      case "DEBUG":
        console.debug(
          `[${log.datetime.toLocaleString()}] [${log.type}] - ${
            log.message
          }\r\n`
        );
        if (log.stack) {
          console.debug(`--Details::`);
          console.debug(log.stack);
        }
        break;
      case "LOG":
        console.log(
          `[${log.datetime.toLocaleString()}] [${log.type}] - ${
            log.message
          }\r\n`
        );
        if (log.stack) {
          console.log(`--Details::`);
          console.log(log.stack);
        }
        break;
      case "ERROR":
        console.error(
          `[${log.datetime.toLocaleString()}] [${log.type}] - ${
            log.message
          }\r\n`
        );
        if (log.stack) {
          console.error(`--Details::`);
          console.error(log.stack);
        }
        break;
      case "INFO":
        console.info(
          `[${log.datetime.toLocaleString()}] [${log.type}] - ${
            log.message
          }\r\n`
        );
        if (log.stack) {
          console.info(`--Details::`);
          console.info(log.stack);
        }
        break;
    }
  };
}