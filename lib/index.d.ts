import { Logger } from "./loggers/Logger";
import { IConfig } from "./models/Config.model";
declare const Loglestial: {
    init: (config?: IConfig | undefined) => Logger;
};
export default Loglestial;
