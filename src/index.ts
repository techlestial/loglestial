import { BaseLogger } from "./utils/BaseLogger";

export const Loglestial = {
  init: (config?: any) => {
    return new BaseLogger();
  },
};
