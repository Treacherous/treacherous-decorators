"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_helper_1 = require("../helpers/metadata-helper");
function withRuleset(ruleset) {
    return function (target, propertyKey) {
        var existingRuleset = metadata_helper_1.getRulesetFromMetadata(target);
        if (typeof ruleset === "function") {
            var linkedRuleset = metadata_helper_1.getRulesetFromMetadata(ruleset);
            existingRuleset.addRuleset(propertyKey, linkedRuleset);
        }
        else {
            existingRuleset.addRuleset(propertyKey, ruleset);
        }
        metadata_helper_1.updateRulesetMetadata(target, existingRuleset);
    };
}
exports.withRuleset = withRuleset;
