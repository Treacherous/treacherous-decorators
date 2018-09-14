import "reflect-metadata";
import {describe, it} from "mocha";
import {use, expect, assert, spy} from "chai";
import {Ruleset, IModelResolver} from "@treacherous/core";
import * as spies from "chai-spies";
use(spies);

import {withRule, withRulesetForEach, createRulesetFor, createGroupFor} from "../../src/index";

class RulesetChild
{
    @withRule("required")
    @withRule("minLength", 10)
    public name: string;
}

class RulesetForeachExample1
{       
    @withRulesetForEach(RulesetChild)
    public stuff: Array<RulesetChild> = [];
}

describe('With Rule Decorator Tests', function () {

    it('should correctly add rule foreach to object', function () {
              
        const instance = new RulesetForeachExample1();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(RulesetForeachExample1);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.rules).to.have.property("stuff");
            expect(ruleset.rules["stuff"].length).to.equal(1);
            expect(ruleset.rules["stuff"][0].internalRule.rules).to.have.property("name");
            expect(ruleset.rules["stuff"][0].internalRule.rules["name"].length).to.equal(2);
            expect(ruleset.rules["stuff"][0].internalRule.rules["name"][1].ruleName).to.equal("required");
            expect(ruleset.rules["stuff"][0].internalRule.rules["name"][0].ruleName).to.equal("minLength");
            expect(ruleset.rules["stuff"][0].internalRule.rules["name"][0].ruleOptions).to.equal(10);
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });    

});