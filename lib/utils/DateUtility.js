"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateUtil = void 0;
var DateUtility = /** @class */ (function () {
    function DateUtility() {
        this.getDateString = function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth();
            var day = today.getDate();
            return [year, month, day].join("-");
        };
    }
    return DateUtility;
}());
exports.dateUtil = new DateUtility();
