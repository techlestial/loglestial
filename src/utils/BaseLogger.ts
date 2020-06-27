import { Log } from "../models/Log.model";
import { ConsoleColor } from "../constants/ConsoleColor.constant";

export class BaseLogger {
  constructor() {}

  public log = (message: string, stack?: any) => {
    this.writeToConsole(new Log("LOG", message, stack));
  };

  public debug = (message: string, stack?: any) => {
    this.writeToConsole(new Log("DEBUG", message, stack));
  };

  public error = (message: string, stack?: any) => {
    this.writeToConsole(new Log("ERROR", message, stack));
  };

  public info = (message: string, stack?: any) => {
    this.writeToConsole(new Log("INFO", message, stack));
  };

  private writeToConsole = (log: Log) => {
    switch (log.type) {
      case "DEBUG":
        console.debug(
          `${ConsoleColor.BgWhite} ${ConsoleColor.FgBlack}`,
          `[${log.datetime.toLocaleString()}]`,
          `${ConsoleColor.Reset}`,
          `${log.color}`,
          `[${log.type}]`,
          `${ConsoleColor.Reset}`,
          `- ${log.message}\r\n`
        );
        if (log.stack) {
          console.debug(`--Stack::`);
          console.debug(log.stack);
        }
        break;
      case "LOG":
        console.log(
          `${ConsoleColor.BgWhite} ${ConsoleColor.FgBlack}`,
          `[${log.datetime.toLocaleString()}]`,
          `${ConsoleColor.Reset}`,
          `${log.color}`,
          `[ ${log.type} ]`,
          `${ConsoleColor.Reset}`,
          `- ${log.message}\r\n`
        );
        if (log.stack) {
          console.log(`--Stack::`);
          console.log(log.stack);
        }
        break;
      case "ERROR":
        console.error(
          `${ConsoleColor.BgWhite} ${ConsoleColor.FgBlack}`,
          `[${log.datetime.toLocaleString()}]`,
          `${ConsoleColor.Reset}`,
          `${log.color}`,
          `[${log.type}]`,
          `${ConsoleColor.Reset}`,
          `- ${log.message}\r\n`
        );
        if (log.stack) {
          console.error(`--Stack::`);
          console.error(log.stack);
        }
        break;
      case "INFO":
        console.info(
          `${ConsoleColor.BgWhite} ${ConsoleColor.FgBlack}`,
          `[${log.datetime.toLocaleString()}]`,
          `${ConsoleColor.Reset}`,
          `${log.color}`,
          `[ ${log.type}]`,
          `${ConsoleColor.Reset}`,
          `- ${log.message}\r\n`
        );
        if (log.stack) {
          console.info(`--Stack::`);
          console.info(log.stack);
        }
        break;
    }
  };
}
