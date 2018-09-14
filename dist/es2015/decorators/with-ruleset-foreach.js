import { ForEachRule } from "@treacherous/core";
import { getRulesetFromMetadata, updateRulesetMetadata } from "../helpers/metadata-helper";
export function withRulesetForEach(ruleset) {
    return function (target, propertyKey) {
        const existingRuleset = getRulesetFromMetadata(target);
        if (typeof ruleset === "function") {
            const linkedRuleset = getRulesetFromMetadata(ruleset);
            existingRuleset.addRuleset(propertyKey, new ForEachRule(linkedRuleset));
        }
        else {
            existingRuleset.addRuleset(propertyKey, new ForEachRule(ruleset));
        }
        updateRulesetMetadata(target, existingRuleset);
    };
}
