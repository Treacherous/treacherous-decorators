"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function date(appliesIf, messageOverride) {
    return with_rule_1.withRule("date", true, appliesIf, messageOverride);
}
exports.date = date;
