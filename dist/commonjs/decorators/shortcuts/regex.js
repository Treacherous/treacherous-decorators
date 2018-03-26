"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function regex(pattern, appliesIf, messageOverride) {
    return with_rule_1.withRule("regex", pattern, appliesIf, messageOverride);
}
exports.regex = regex;
