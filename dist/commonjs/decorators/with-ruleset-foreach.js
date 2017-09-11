"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treacherous_1 = require("treacherous");
var metadata_helper_1 = require("../helpers/metadata-helper");
function withRulesetForEach(ruleset) {
    return function (target, propertyKey) {
        var existingRuleset = metadata_helper_1.getRulesetFromMetadata(target);
        if (typeof ruleset === "function") {
            var linkedRuleset = metadata_helper_1.getRulesetFromMetadata(ruleset);
            existingRuleset.addRuleset(propertyKey, new treacherous_1.ForEachRule(linkedRuleset));
        }
        else {
            existingRuleset.addRuleset(propertyKey, new treacherous_1.ForEachRule(ruleset));
        }
        metadata_helper_1.updateRulesetMetadata(target, existingRuleset);
    };
}
exports.withRulesetForEach = withRulesetForEach;
