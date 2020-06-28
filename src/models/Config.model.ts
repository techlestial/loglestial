export interface IConfig {
  logToFile?: boolean;
  fileLoggerOptions?: IFileLoggerOptions;
  logToDatabase?: boolean;
  databaseLoggerOptions?: IDatabaseLoggerOptions;
}

export interface IFileLoggerOptions {
  directory: string;
  logLevel: "DEBUG" | "ERROR" | "INFO" | "LOG";
  filePrefix: string;
}

export interface IDatabaseLoggerOptions {
  databaseType: "MONGODB" | "ELASTICSEARCH" | "MSSQL";
  logLevel: "DEBUG" | "ERROR" | "INFO" | "LOG";
  databaseConfig: {
    username: string;
    password: string;
    host: string;
    port: number;
    database: string;
    table: string;
  };
}
