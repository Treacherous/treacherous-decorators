define(["require", "exports", "../helpers/metadata-helper"], function (require, exports, metadata_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
