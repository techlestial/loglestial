import { Log } from "../models/Log.model";
import { IFileLoggerOptions } from "../models/Config.model";
export declare class FileLogger {
    options: IFileLoggerOptions;
    constructor(options?: IFileLoggerOptions);
    logToFile: (log: Log) => Promise<void>;
}
