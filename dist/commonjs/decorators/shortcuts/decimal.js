"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function decimal(appliesIf, messageOverride) {
    return with_rule_1.withRule("decimal", true, appliesIf, messageOverride);
}
exports.decimal = decimal;
