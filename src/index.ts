import { Logger } from "./loggers/Logger";
import { IConfig } from "./models/Config.model";

export const Loglestial = {
  init: (config?: IConfig) => {
    return new Logger(config);
  },
};
