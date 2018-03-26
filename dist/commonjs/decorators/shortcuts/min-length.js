"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function minLength(length, appliesIf, messageOverride) {
    return with_rule_1.withRule("minLength", length, appliesIf, messageOverride);
}
exports.minLength = minLength;
