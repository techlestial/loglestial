"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("./loggers/Logger");
var Loglestial = {
    init: function (config) {
        return new Logger_1.Logger(config);
    },
};
exports.default = Loglestial;
