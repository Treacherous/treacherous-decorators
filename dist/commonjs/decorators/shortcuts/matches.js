"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function matches(property, appliesIf, messageOverride) {
    return with_rule_1.withRule("matches", property, appliesIf, messageOverride);
}
exports.matches = matches;
