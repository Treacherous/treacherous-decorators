"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function maxLength(length, appliesIf, messageOverride) {
    return with_rule_1.withRule("maxLength", length, appliesIf, messageOverride);
}
exports.maxLength = maxLength;
