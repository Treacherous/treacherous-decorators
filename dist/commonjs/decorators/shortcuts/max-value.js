"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function maxValue(value, appliesIf, messageOverride) {
    return with_rule_1.withRule("maxValue", value, appliesIf, messageOverride);
}
exports.maxValue = maxValue;
