export interface IConfig {
  /**
   * boolean config to log as files
   */
  logToFile?: boolean;
  /**
   * further config for file logger
   */
  fileLoggerOptions?: IFileLoggerOptions;
  /**
   * boolean config to log to database
   */
  logToDatabase?: boolean;
  /**
   * further config for database logger
   */
  databaseLoggerOptions?: IDatabaseLoggerOptions;
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
  /**
   * further options for archiving
   */
  archiveOptions?: number;
  /**
   * further config for deleting
   */
  deleteOptions?: number;
}

export interface IDatabaseLoggerOptions {
  databaseType?: "MONGODB" | "ELASTICSEARCH" | "MSSQL";
  logLevel?: "DEBUG" | "ERROR" | "INFO" | "LOG";
  databaseConfig?: {
    username?: string;
    password?: string;
    host?: string;
    port?: number;
    database?: string;
    table?: string;
  };
}
