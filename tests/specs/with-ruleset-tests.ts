import "core-js";

import {use, expect, assert, spy} from "chai";
import {Ruleset} from "treacherous";
import * as spies from "chai-spies";
use(spies);

import {withRule, withRuleset, createRulesetFor, createGroupFor} from "../../src/index";


class RulesetExample1Child
{
    @withRule("required")
    @withRule("minLength", 10)
    public name: string;
}

class RulesetExample1
{       
    @withRuleset(RulesetExample1Child)
    public basic: RulesetExample1Child;
}

describe('With Ruleset Decorator Tests', function () {

    
    it('should correctly add ruleset to object', function () {       
        
        const instance = new RulesetExample1();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(RulesetExample1);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.rules).to.have.property("basic");
            expect(ruleset.rules["basic"].length).to.equal(1);

            const basicRuleset = ruleset.rules["basic"][0];
            expect(basicRuleset.rules).to.have.property("name");
            expect(basicRuleset.rules["name"].length).to.equal(2);
            expect(basicRuleset.rules["name"][1].ruleName).to.equal("required");
            expect(basicRuleset.rules["name"][0].ruleName).to.equal("minLength");
            expect(basicRuleset.rules["name"][0].ruleOptions).to.equal(10);
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });

});