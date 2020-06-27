import { ConsoleColor } from "../constants/ConsoleColor.constant";

export class Log {
  type: "DEBUG" | "INFO" | "ERROR" | "LOG" = "LOG";
  color: string = "";
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

    switch (this.type) {
      case "DEBUG":
        this.color = `${ConsoleColor.BgGreen} ${ConsoleColor.FgBlack}`;
        break;
      case "INFO":
        this.color = `${ConsoleColor.BgCyan} ${ConsoleColor.FgBlack}`;
        break;
      case "ERROR":
        this.color = `${ConsoleColor.BgRed} ${ConsoleColor.FgBlack}`;
        break;
      case "LOG":
        this.color =`${ConsoleColor.BgMagenta} ${ConsoleColor.FgBlack}`;
        break;
    }
  }
}
