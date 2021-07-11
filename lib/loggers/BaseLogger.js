"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLogger = void 0;
var ConsoleColor_constant_1 = require("../constants/ConsoleColor.constant");
var BaseLogger = /** @class */ (function () {
    function BaseLogger() {
        this.logToConsole = function (log) {
            switch (log.type) {
                case "DEBUG":
                    console.debug(ConsoleColor_constant_1.ConsoleColor.BgWhite + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack, "[" + log.datetime.toLocaleString() + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "" + log.color, "[" + log.type + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "- " + log.message + "\r\n");
                    if (log.stack) {
                        console.debug("--Stack::");
                        console.debug(log.stack);
                    }
                    break;
                case "LOG":
                    console.log(ConsoleColor_constant_1.ConsoleColor.BgWhite + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack, "[" + log.datetime.toLocaleString() + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "" + log.color, "[ " + log.type + " ]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "- " + log.message + "\r\n");
                    if (log.stack) {
                        console.log("--Stack::");
                        console.log(log.stack);
                    }
                    break;
                case "ERROR":
                    console.error(ConsoleColor_constant_1.ConsoleColor.BgWhite + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack, "[" + log.datetime.toLocaleString() + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "" + log.color, "[" + log.type + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "- " + log.message + "\r\n");
                    if (log.stack) {
                        console.error("--Stack::");
                        console.error(log.stack);
                    }
                    break;
                case "INFO":
                    console.info(ConsoleColor_constant_1.ConsoleColor.BgWhite + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack, "[" + log.datetime.toLocaleString() + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "" + log.color, "[ " + log.type + "]", "" + ConsoleColor_constant_1.ConsoleColor.Reset, "- " + log.message + "\r\n");
                    if (log.stack) {
                        console.info("--Stack::");
                        console.info(log.stack);
                    }
                    break;
            }
        };
    }
    return BaseLogger;
}());
exports.BaseLogger = BaseLogger;
