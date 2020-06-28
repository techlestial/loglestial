import { Log } from "../models/Log.model";
import path from "path";
import { IFileLoggerOptions } from "../models/Config.model";
import { dateUtil } from "../utils/DateUtility";
import { fileUtil } from "../utils/FileUtility";
import { LogLevel } from "../constants/LogLevel.constant";

export class FileLogger {
  options: IFileLoggerOptions = {
    logLevel: "DEBUG",
    directory: path.resolve("logs"),
    filePrefix: "app",
  };

  constructor(options?: IFileLoggerOptions) {
    this.options = { ...this.options, ...options };
  }

  logToFile = async (log: Log) => {
    if (
      this.options.logLevel &&
      LogLevel[log.type] > LogLevel[this.options.logLevel]
    ) {
      return;
    }

    const { directory, filePrefix } = this.options;
    if (!directory) {
      return;
    }

    const fileName = `${filePrefix}.${dateUtil.getDateString()}.log`;
    const filePath = path.resolve(directory, fileName);

    if (!fileUtil.directoryExists(directory)) {
      fileUtil.createDirectory(directory);
    }
    fileUtil.writeToFile(
      filePath,
      `[${log.datetime.toLocaleString()}] [${log.type}] - ${log.message}\r\n`
    );
    if (log.stack) {
      fileUtil.writeToFile(
        filePath,
        `--Details::\r\n${JSON.stringify(log.stack)}\r\n`
      );
    }
  };
}
