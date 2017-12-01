import { getRulesetFromMetadata, updateRulesetMetadata } from "../helpers/metadata-helper";
export function withDisplayName(displayName) {
    return function (target, propertyKey) {
        const existingRuleset = getRulesetFromMetadata(target);
        existingRuleset.propertyDisplayNames[propertyKey] = displayName;
        updateRulesetMetadata(target, existingRuleset);
    };
}
