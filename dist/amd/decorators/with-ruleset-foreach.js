define(["require", "exports", "treacherous", "../helpers/metadata-helper"], function (require, exports, treacherous_1, metadata_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
