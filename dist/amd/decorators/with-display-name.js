define(["require", "exports", "../helpers/metadata-helper"], function (require, exports, metadata_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function withDisplayName(displayName) {
        return function (target, propertyKey) {
            var existingRuleset = metadata_helper_1.getRulesetFromMetadata(target);
            existingRuleset.propertyDisplayNames[propertyKey] = displayName;
            metadata_helper_1.updateRulesetMetadata(target, existingRuleset);
        };
    }
    exports.withDisplayName = withDisplayName;
});
