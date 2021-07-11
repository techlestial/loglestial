export interface IConfig {
  /**
   * boolean config to log as files
   */
  logToFile?: boolean;
  /**
   * further config for file logger
   */
  fileLoggerOptions?: IFileLoggerOptions;
}

export interface IFileLoggerOptions {
  /**
   * directory where logs will be created
   */
  directory?: string;
  /**
   * @value
   * - DEBUG = 4;
   * - ERROR = 3;
   * - INFO = 2;
   * - LOG = 1;
   */
  logLevel?: "DEBUG" | "ERROR" | "INFO" | "LOG";
  /**
   * prefix infront of the log file
   * e.g,
   * @value "app" will result in app.xxxx-xx-xx.log
   */
  filePrefix?: string;
}
