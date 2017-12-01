import {use, expect, assert, spy} from "chai";
import {Ruleset, IModelResolver} from "treacherous";
import * as spies from "chai-spies";
use(spies);

import {withRule, withRuleForEach, createRulesetFor, createGroupFor} from "../../src/index";

class RuleForEachExample1
{
    @withRuleForEach("required")
    @withRuleForEach("minLength", 3)
    public stuff: Array<string> = [];
}

class RuleForEachExample2
{
    @withRuleForEach("minLength", 10, (x) => true, "message override")
    public stuff: Array<string> = [];
}

describe('With Rule Decorator Tests', function () {

    it('should correctly add rule foreach to object', function () {
              
        const instance = new RuleForEachExample1();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(RuleForEachExample1);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.rules).to.have.property("stuff");
            expect(ruleset.rules["stuff"].length).to.equal(2);
            expect(ruleset.rules["stuff"][1].internalRule.ruleName).to.equal("required");
            expect(ruleset.rules["stuff"][0].internalRule.ruleName).to.equal("minLength");
            expect(ruleset.rules["stuff"][0].internalRule.ruleOptions).to.equal(3);
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });

    it('should correctly apply rules with appliesIf predicate and message override to object', function () {
        
        const instance = new RuleForEachExample2();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(RuleForEachExample2);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.rules).to.have.property("stuff");
            expect(ruleset.rules["stuff"].length).to.equal(1);
            expect(ruleset.rules["stuff"][0].internalRule.ruleName).to.equal("minLength");
            expect(ruleset.rules["stuff"][0].internalRule.ruleOptions).to.equal(10);
            expect(ruleset.rules["stuff"][0].internalRule.appliesIf).is.not.undefined;
            expect(typeof ruleset.rules["stuff"][0].internalRule.appliesIf).to.equal("function");
            expect(ruleset.rules["stuff"][0].internalRule.appliesIf()).to.be.true;
            expect(ruleset.rules["stuff"][0].internalRule.messageOverride).to.equal("message override");
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });

});