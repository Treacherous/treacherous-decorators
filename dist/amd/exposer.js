define(["require", "exports", "treacherous", "./helpers/metadata-helper"], function (require, exports, treacherous_1, metadata_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createRulesetFor(target) { return metadata_helper_1.getRulesetFromMetadata(target); }
    exports.createRulesetFor = createRulesetFor;
    function createGroupFor(target, groupSetup) {
        var ruleset = createRulesetFor(target.constructor);
        var validationGroup = treacherous_1.createGroup();
        if (!groupSetup) {
            groupSetup(validationGroup);
        }
        return validationGroup.build(target, ruleset);
    }
    exports.createGroupFor = createGroupFor;
});
