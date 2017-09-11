import "reflect-metadata";
console.log("HELLO");
import { Ruleset } from "treacherous";
export const rulesetMetadataKey = Symbol("ruleset");
export function getRulesetFromMetadata(target) {
    const targetUsed = target.prototype || target;
    console.log("targ used", targetUsed);
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
