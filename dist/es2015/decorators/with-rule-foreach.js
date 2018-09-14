import { RuleLink, ForEachRule } from "@treacherous/core";
import { getRulesetFromMetadata, updateRulesetMetadata } from "../helpers/metadata-helper";
export function withRuleForEach(ruleName, ruleOptions, appliesIf, messageOverride) {
    return function (target, propertyKey) {
        const existingRuleset = getRulesetFromMetadata(target);
        const ruleLink = new RuleLink(ruleName, ruleOptions);
        if (typeof appliesIf !== undefined) {
            ruleLink.appliesIf = appliesIf;
        }
        if (typeof messageOverride !== undefined) {
            ruleLink.messageOverride = messageOverride;
        }
        existingRuleset.addRule(propertyKey, new ForEachRule(ruleLink));
        updateRulesetMetadata(target, existingRuleset);
    };
}
