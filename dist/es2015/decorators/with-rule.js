import { RuleLink } from "treacherous";
import { getRulesetFromMetadata, updateRulesetMetadata } from "../helpers/metadata-helper";
export function withRule(ruleName, ruleOptions, appliesIf, messageOverride) {
    return function (target, propertyKey) {
        const existingRuleset = getRulesetFromMetadata(target);
        const ruleLink = new RuleLink(ruleName, ruleOptions);
        if (typeof appliesIf !== "undefined") {
            ruleLink.appliesIf = appliesIf;
        }
        if (typeof messageOverride !== "undefined") {
            ruleLink.messageOverride = messageOverride;
        }
        existingRuleset.addRule(propertyKey, ruleLink);
        updateRulesetMetadata(target, existingRuleset);
    };
}
