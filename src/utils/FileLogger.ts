import { BaseLogger } from "./BaseLogger";

export class FileLogger extends BaseLogger {
  constructor() {
    super();
  }
  debug = () => {
    console.log("Hi")
  };
}
