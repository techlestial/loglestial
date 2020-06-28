import { Log } from "../models/Log.model";
import { IConfig } from "../models/Config.model";
import { BaseLogger } from "./BaseLogger";
import { FileLogger } from "./FileLogger";

export class Logger {
  config?: IConfig;
  baseLogger: BaseLogger = new BaseLogger();
  fileLogger: any;

  constructor(config?: IConfig) {
    this.config = config;
    if (!this.config) {
      return;
    }
    if (this.config.logToFile && this.config.fileLoggerOptions) {
      this.fileLogger = new FileLogger(this.config.fileLoggerOptions);
    }
  }

  public log = (message: string, stack?: any) => {
    this.performLogging(new Log("LOG", message, stack));
  };

  public debug = (message: string, stack?: any) => {
    this.performLogging(new Log("DEBUG", message, stack));
  };

  public error = (message: string, stack?: any) => {
    this.performLogging(new Log("ERROR", message, stack));
  };

  public info = (message: string, stack?: any) => {
    this.performLogging(new Log("INFO", message, stack));
  };

  private performLogging(log: Log) {
    this.baseLogger.logToConsole(log);
    if (!this.config) {
      return;
    }
    if (this.config.logToFile) {
      (this.fileLogger as FileLogger).logToFile(log);
    }
  }
}
