"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function minValue(value, appliesIf, messageOverride) {
    return with_rule_1.withRule("minValue", value, appliesIf, messageOverride);
}
exports.minValue = minValue;
