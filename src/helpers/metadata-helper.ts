import {Ruleset} from "@treacherous/core";

export const rulesetMetadataKey = Symbol("ruleset");

export function getRulesetFromMetadata(target: Object | any) : Ruleset  { 
    const targetUsed = target.prototype || target;
    if(Reflect.hasMetadata(rulesetMetadataKey, targetUsed))
    { return Reflect.getMetadata(rulesetMetadataKey, targetUsed); }
    else
    { return new Ruleset(); }
}

export function updateRulesetMetadata(target: Object | any, ruleset: Ruleset): void {
    const targetUsed = target.prototype || target;
    Reflect.defineMetadata(rulesetMetadataKey, ruleset, targetUsed);
}