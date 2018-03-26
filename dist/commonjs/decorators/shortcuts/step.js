"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function step(value, appliesIf, messageOverride) {
    return with_rule_1.withRule("step", value, appliesIf, messageOverride);
}
exports.step = step;
