import { Logger } from "./loggers/Logger";
import { IConfig } from "./models/Config.model";

const Loglestial = {
  init: (config?: IConfig) => {
    return new Logger(config);
  },
};

export default Loglestial;
