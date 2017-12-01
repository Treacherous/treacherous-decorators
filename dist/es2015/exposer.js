import { createGroup } from "treacherous";
import { getRulesetFromMetadata } from "./helpers/metadata-helper";
export function createRulesetFor(target) { return getRulesetFromMetadata(target); }
export function createGroupFor(target, groupSetup) {
    const ruleset = createRulesetFor(target.constructor);
    let validationGroup = createGroup();
    if (!groupSetup) {
        groupSetup(validationGroup);
    }
    return validationGroup.build(target, ruleset);
}
