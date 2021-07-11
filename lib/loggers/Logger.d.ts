import { IConfig } from "../models/Config.model";
import { BaseLogger } from "./BaseLogger";
export declare class Logger {
    config?: IConfig;
    baseLogger: BaseLogger;
    fileLogger: any;
    constructor(config?: IConfig);
    log: (message: string, stack?: any) => void;
    debug: (message: string, stack?: any) => void;
    error: (message: string, stack?: any) => void;
    info: (message: string, stack?: any) => void;
    private performLogging;
}
