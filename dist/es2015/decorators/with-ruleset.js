import { getRulesetFromMetadata, updateRulesetMetadata } from "../helpers/metadata-helper";
export function withRuleset(ruleset) {
    return function (target, propertyKey) {
        const existingRuleset = getRulesetFromMetadata(target);
        if (typeof ruleset === "function") {
            const linkedRuleset = getRulesetFromMetadata(ruleset);
            existingRuleset.addRuleset(propertyKey, linkedRuleset);
        }
        else {
            existingRuleset.addRuleset(propertyKey, ruleset);
        }
        updateRulesetMetadata(target, existingRuleset);
    };
}
