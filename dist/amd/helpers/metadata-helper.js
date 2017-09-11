define(["require", "exports", "treacherous", "reflect-metadata"], function (require, exports, treacherous_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("HELLO");
    exports.rulesetMetadataKey = Symbol("ruleset");
    function getRulesetFromMetadata(target) {
        var targetUsed = target.prototype || target;
        console.log("targ used", targetUsed);
        if (Reflect.hasMetadata(exports.rulesetMetadataKey, targetUsed)) {
            return Reflect.getMetadata(exports.rulesetMetadataKey, targetUsed);
        }
        else {
            return new treacherous_1.Ruleset();
        }
    }
    exports.getRulesetFromMetadata = getRulesetFromMetadata;
    function updateRulesetMetadata(target, ruleset) {
        var targetUsed = target.prototype || target;
        Reflect.defineMetadata(exports.rulesetMetadataKey, ruleset, targetUsed);
    }
    exports.updateRulesetMetadata = updateRulesetMetadata;
});
