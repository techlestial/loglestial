export class Log {
  type: "DEBUG" | "INFO" | "ERROR" | "LOG" = "LOG";
  message: string = "";
  datetime: Date = new Date();
  stack?: any;

  constructor(
    type: "DEBUG" | "INFO" | "ERROR" | "LOG",
    message: string,
    stack?: any
  ) {
    this.type = type;
    this.message = message;
    this.stack = stack;
  }
}
