"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function required(appliesIf, messageOverride) {
    return with_rule_1.withRule("required", true, appliesIf, messageOverride);
}
exports.required = required;
