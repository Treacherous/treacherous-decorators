import { ValidationGroupBuilder, Ruleset, IValidationGroup } from "@treacherous/core";
export declare function createRulesetFor(target: Object | any): Ruleset;
export declare function createGroupFor(target: any, groupSetup?: (group: ValidationGroupBuilder) => ValidationGroupBuilder): IValidationGroup;
