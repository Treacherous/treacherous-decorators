import { Ruleset } from "@treacherous/core";
export const rulesetMetadataKey = Symbol("ruleset");
export function getRulesetFromMetadata(target) {
    const targetUsed = target.prototype || target;
    if (Reflect.hasMetadata(rulesetMetadataKey, targetUsed)) {
        return Reflect.getMetadata(rulesetMetadataKey, targetUsed);
    }
    else {
        return new Ruleset();
    }
}
export function updateRulesetMetadata(target, ruleset) {
    const targetUsed = target.prototype || target;
    Reflect.defineMetadata(rulesetMetadataKey, ruleset, targetUsed);
}
