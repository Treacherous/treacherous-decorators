import {use, expect, assert, spy} from "chai";
import {Ruleset, IModelResolver} from "treacherous";
import * as spies from "chai-spies";
use(spies);

import {withRule, withRuleset, createRulesetFor, createGroupFor} from "../../src/index";

class RuleExample1
{
    @withRule("required")
    @withRule("minLength", 10)
    public name = "";
}

class RuleExample2
{
    @withRule("minLength", 10, (x) => true, "message override")
    public name = "";
}

describe('With Rule Decorator Tests', function () {

    it('should correctly add rules to object', function () {
              
        const instance = new RuleExample1();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(RuleExample1);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.rules).to.have.property("name");
            expect(ruleset.rules["name"].length).to.equal(2);
            expect(ruleset.rules["name"][1].ruleName).to.equal("required");
            expect(ruleset.rules["name"][0].ruleName).to.equal("minLength");
            expect(ruleset.rules["name"][0].ruleOptions).to.equal(10);
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });

    it('should correctly apply rules with appliesIf predicate and message override to object', function () {
        
        const instance = new RuleExample2();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(RuleExample2);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.rules).to.have.property("name");
            expect(ruleset.rules["name"].length).to.equal(1);
            expect(ruleset.rules["name"][0].ruleName).to.equal("minLength");
            expect(ruleset.rules["name"][0].ruleOptions).to.equal(10);
            expect(ruleset.rules["name"][0].appliesIf).is.not.undefined;
            expect(typeof ruleset.rules["name"][0].appliesIf).to.equal("function");
            expect(ruleset.rules["name"][0].appliesIf()).to.be.true;
            expect(ruleset.rules["name"][0].messageOverride).to.equal("message override");
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });

});