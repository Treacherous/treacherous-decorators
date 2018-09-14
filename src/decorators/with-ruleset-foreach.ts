import {Ruleset, RuleLink, ForEachRule} from "@treacherous/core";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../helpers/metadata-helper";

export function withRulesetForEach(ruleset: Ruleset | Object) {
    
    return function(target: Object, propertyKey: string) : void
    {
        const existingRuleset = getRulesetFromMetadata(target);

        if(typeof ruleset === "function")
        { 
            const linkedRuleset = getRulesetFromMetadata(<Object>ruleset);
            existingRuleset.addRuleset(propertyKey, new ForEachRule<Ruleset>(linkedRuleset)); 
        }
        else
        { existingRuleset.addRuleset(propertyKey, new ForEachRule<Ruleset>(<Ruleset>ruleset)); }
        
        updateRulesetMetadata(target, existingRuleset);
    };
}