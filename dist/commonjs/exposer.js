"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@treacherous/core");
var metadata_helper_1 = require("./helpers/metadata-helper");
function createRulesetFor(target) { return metadata_helper_1.getRulesetFromMetadata(target); }
exports.createRulesetFor = createRulesetFor;
function createGroupFor(target, groupSetup) {
    var ruleset = createRulesetFor(target.constructor);
    var validationGroup = core_1.createGroup();
    if (!groupSetup) {
        groupSetup(validationGroup);
    }
    return validationGroup.build(target, ruleset);
}
exports.createGroupFor = createGroupFor;
