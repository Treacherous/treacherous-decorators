import {ValidationGroupBuilder, Ruleset, IValidationGroup, createGroup} from "@treacherous/core";
import {getRulesetFromMetadata} from "./helpers/metadata-helper";

export function createRulesetFor(target: Object | any): Ruleset
{ return getRulesetFromMetadata(target); }

export function createGroupFor(target: any, groupSetup?: (group: ValidationGroupBuilder) => ValidationGroupBuilder): IValidationGroup
{
    const ruleset = createRulesetFor(target.constructor);
    
    let validationGroup = createGroup();
    if(!groupSetup) { groupSetup(validationGroup); }

    return validationGroup.build(target, ruleset);
}