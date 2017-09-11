define(["require", "exports", "treacherous", "../helpers/metadata-helper"], function (require, exports, treacherous_1, metadata_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function withRule(ruleName, ruleOptions, appliesIf, messageOverride) {
        return function (target, propertyKey) {
            var existingRuleset = metadata_helper_1.getRulesetFromMetadata(target);
            var ruleLink = new treacherous_1.RuleLink(ruleName, ruleOptions);
            if (typeof appliesIf !== "undefined") {
                ruleLink.appliesIf = appliesIf;
            }
            if (typeof messageOverride !== "undefined") {
                ruleLink.messageOverride = messageOverride;
            }
            existingRuleset.addRule(propertyKey, ruleLink);
            metadata_helper_1.updateRulesetMetadata(target, existingRuleset);
            console.log("RULE", existingRuleset.rules);
        };
    }
    exports.withRule = withRule;
});
