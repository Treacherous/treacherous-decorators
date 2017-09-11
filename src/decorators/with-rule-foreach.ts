import {Ruleset, RuleLink, ForEachRule, IModelResolver} from "treacherous";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../helpers/metadata-helper";

export function withRuleForEach(ruleName: string, ruleOptions?: any, 
    appliesIf?: (modelResolver: IModelResolver, value: any, ruleOptions?: any) => boolean | boolean, 
    messageOverride?: (value: any, ruleOptions?: any) => string | string) {
    
    return function(target: Object, propertyKey: string) : void
    {
        const existingRuleset = getRulesetFromMetadata(target);
        const ruleLink = new RuleLink(ruleName, ruleOptions);
        
        if(typeof appliesIf !== undefined)
        { ruleLink.appliesIf = appliesIf; }

        if(typeof messageOverride !== undefined)
        { ruleLink.messageOverride = messageOverride; }

        existingRuleset.addRule(propertyKey, new ForEachRule<RuleLink>(ruleLink));
        updateRulesetMetadata(target, existingRuleset);
    }
}