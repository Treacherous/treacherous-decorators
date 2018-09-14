import {Ruleset, RuleLink} from "@treacherous/core";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../helpers/metadata-helper";

export function withRuleset(ruleset: Ruleset | Object) {
    
    return function(target: Object, propertyKey: string) : void
    {
        const existingRuleset = getRulesetFromMetadata(target);

        if(typeof ruleset === "function")
        { 
            const linkedRuleset = getRulesetFromMetadata(<Object>ruleset);
            existingRuleset.addRuleset(propertyKey, linkedRuleset); 
        }
        else
        { existingRuleset.addRuleset(propertyKey, <Ruleset>ruleset); }
        
        updateRulesetMetadata(target, existingRuleset);
    };
}