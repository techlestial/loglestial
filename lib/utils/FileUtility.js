"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUtil = void 0;
var fs_1 = __importDefault(require("fs"));
var FileUtility = /** @class */ (function () {
    function FileUtility() {
        this.directoryExists = function (dirName) {
            return fs_1.default.existsSync(dirName);
        };
        this.fileExists = function (file) {
            return fs_1.default.existsSync(file);
        };
        this.writeToFile = function (file, message) {
            fs_1.default.appendFileSync(file, message);
        };
        this.createDirectory = function (dirName) {
            fs_1.default.mkdirSync(dirName);
        };
    }
    return FileUtility;
}());
exports.fileUtil = new FileUtility();
