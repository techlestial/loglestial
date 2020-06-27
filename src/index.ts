import { BaseLogger } from "./utils/BaseLogger";
import { FileLogger } from "./utils/FileLogger";

export const Loglestial = {
  init: (config?: any) => {
    switch (config) {
      case { logToFile: true }:
        return new FileLogger();
      default:
        return new BaseLogger();
    }
  },
};
