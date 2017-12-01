import {use, expect, assert, spy} from "chai";
import {Ruleset} from "treacherous";
import * as spies from "chai-spies";
use(spies);

import {withDisplayName, createRulesetFor, createGroupFor} from "../../src/index";

class WithDisplayNameExample1
{
    @withDisplayName("customName")
    public name: string;
}

describe('With Display Name Decorator Tests', function () {
    
    it('should correctly add display name override', function () {       
        
        const instance = new WithDisplayNameExample1();
        const rulesetFromInstance = createRulesetFor(instance);
        const rulesetFromType = createRulesetFor(WithDisplayNameExample1);

        const verifyRuleset = (ruleset: Ruleset) => {
            expect(ruleset.propertyDisplayNames).to.have.property("name");
            expect(ruleset.propertyDisplayNames["name"]).to.equal("customName");
        };

        verifyRuleset(rulesetFromInstance);
        verifyRuleset(rulesetFromType);
    });

});