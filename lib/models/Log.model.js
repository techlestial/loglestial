"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var ConsoleColor_constant_1 = require("../constants/ConsoleColor.constant");
var Log = /** @class */ (function () {
    function Log(type, message, stack) {
        this.type = "LOG";
        this.color = "";
        this.message = "";
        this.datetime = new Date();
        this.type = type;
        this.message = message;
        this.stack = stack;
        switch (this.type) {
            case "DEBUG":
                this.color = ConsoleColor_constant_1.ConsoleColor.BgGreen + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack;
                break;
            case "INFO":
                this.color = ConsoleColor_constant_1.ConsoleColor.BgCyan + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack;
                break;
            case "ERROR":
                this.color = ConsoleColor_constant_1.ConsoleColor.BgRed + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack;
                break;
            case "LOG":
                this.color = ConsoleColor_constant_1.ConsoleColor.BgMagenta + " " + ConsoleColor_constant_1.ConsoleColor.FgBlack;
                break;
        }
    }
    return Log;
}());
exports.Log = Log;
