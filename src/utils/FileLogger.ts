import { Log } from "../models/Log.model";
import fs from "fs";
import { IFileLoggerOptions } from "../models/Config.model";
import { dateUtil } from "./DateUtility";

export class FileLogger {
  options: IFileLoggerOptions = {
    logLevel: "DEBUG",
    directory: __dirname + "/logs",
    filePrefix: "app",
  };

  constructor(options: IFileLoggerOptions) {
    this.options = { ...this.options, ...options };
  }

  logToFile = (log: Log) => {
    const { directory, filePrefix } = this.options;
    const fileName = `${filePrefix}.${dateUtil.getDateString()}.log`;
    fs.appendFileSync(directory + "/" + fileName, "hi");
  };
}
