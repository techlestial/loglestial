"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Log_model_1 = require("../models/Log.model");
var BaseLogger_1 = require("./BaseLogger");
var FileLogger_1 = require("./FileLogger");
var Logger = /** @class */ (function () {
    function Logger(config) {
        var _this = this;
        this.baseLogger = new BaseLogger_1.BaseLogger();
        this.log = function (message, stack) {
            _this.performLogging(new Log_model_1.Log("LOG", message, stack));
        };
        this.debug = function (message, stack) {
            _this.performLogging(new Log_model_1.Log("DEBUG", message, stack));
        };
        this.error = function (message, stack) {
            _this.performLogging(new Log_model_1.Log("ERROR", message, stack));
        };
        this.info = function (message, stack) {
            _this.performLogging(new Log_model_1.Log("INFO", message, stack));
        };
        this.config = config;
        if (!this.config) {
            return;
        }
        if (this.config.logToFile) {
            this.fileLogger = new FileLogger_1.FileLogger(this.config.fileLoggerOptions);
        }
    }
    Logger.prototype.performLogging = function (log) {
        this.baseLogger.logToConsole(log);
        if (!this.config) {
            return;
        }
        if (this.fileLogger) {
            this.fileLogger.logToFile(log);
        }
    };
    return Logger;
}());
exports.Logger = Logger;
