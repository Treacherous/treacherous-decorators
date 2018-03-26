import { Ruleset } from "treacherous";
export declare const rulesetMetadataKey: unique symbol;
export declare function getRulesetFromMetadata(target: Object | any): Ruleset;
export declare function updateRulesetMetadata(target: Object | any, ruleset: Ruleset): void;
