"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treacherous_1 = require("treacherous");
exports.rulesetMetadataKey = Symbol("ruleset");
function getRulesetFromMetadata(target) {
    var targetUsed = target.prototype || target;
    if (Reflect.hasMetadata(exports.rulesetMetadataKey, targetUsed)) {
        return Reflect.getMetadata(exports.rulesetMetadataKey, targetUsed);
    }
    else {
        return new treacherous_1.Ruleset();
    }
}
exports.getRulesetFromMetadata = getRulesetFromMetadata;
function updateRulesetMetadata(target, ruleset) {
    var targetUsed = target.prototype || target;
    Reflect.defineMetadata(exports.rulesetMetadataKey, ruleset, targetUsed);
}
exports.updateRulesetMetadata = updateRulesetMetadata;
