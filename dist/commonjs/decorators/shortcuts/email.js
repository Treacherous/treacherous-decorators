"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_rule_1 = require("../with-rule");
function email(appliesIf, messageOverride) {
    return with_rule_1.withRule("email", true, appliesIf, messageOverride);
}
exports.email = email;
