import { Logger } from "./lib/loggers/Logger";
import { IConfig } from "./lib/models/Config.model";

declare const Loglestial: {
  init: (config?: IConfig | undefined) => Logger;
};
