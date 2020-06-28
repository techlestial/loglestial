import { Logger } from "./utils/Logger";
import { IConfig } from "./models/Config.model";

export const Loglestial = {
  init: (config?: IConfig) => {
    return new Logger(config);
  },
};
