"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_helper_1 = require("../helpers/metadata-helper");
function withDisplayName(displayName) {
    return function (target, propertyKey) {
        var existingRuleset = metadata_helper_1.getRulesetFromMetadata(target);
        existingRuleset.propertyDisplayNames[propertyKey] = displayName;
        metadata_helper_1.updateRulesetMetadata(target, existingRuleset);
    };
}
exports.withDisplayName = withDisplayName;
