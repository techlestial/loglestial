export declare class Log {
    type: "DEBUG" | "INFO" | "ERROR" | "LOG";
    color: string;
    message: string;
    datetime: Date;
    stack?: any;
    constructor(type: "DEBUG" | "INFO" | "ERROR" | "LOG", message: string, stack?: any);
}
