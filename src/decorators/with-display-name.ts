import {Ruleset, RuleLink} from "treacherous";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../helpers/metadata-helper";

export function withDisplayName(displayName: string) {
    
    return function(target: Object, propertyKey: string) : void
    {
        const existingRuleset = getRulesetFromMetadata(target);
        existingRuleset.propertyDisplayNames[propertyKey] = displayName;
        updateRulesetMetadata(target, existingRuleset);
    };
}