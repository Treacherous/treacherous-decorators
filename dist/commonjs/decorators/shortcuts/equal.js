"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function equal(value, appliesIf, messageOverride) {
    return with_rule_1.withRule("equal", value, appliesIf, messageOverride);
}
exports.equal = equal;
