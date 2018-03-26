import {use, expect, assert, spy} from "chai";
import {Ruleset} from "treacherous";
import * as spies from "chai-spies";
use(spies);

import {
    required, date, decimal, email, equal, isoDate, maxLength, maxValue,
    minLength, minValue, notEqual, number, regex, step, matches, createRulesetFor
} from "../../src/index";

function hasRule(ruleset: Ruleset, ruleName: string, ruleValue: any) {
    expect(ruleset.rules).to.have.property("property");
    expect(ruleset.rules["property"].length).to.equal(1);

    const propertyRules = ruleset.rules["property"][0];
    expect(propertyRules.ruleName).to.equal(ruleName);
    expect(propertyRules.ruleOptions).to.equal(ruleValue);
};

describe('Shortcut Tests', function () {
    
    it('should correctly add required rule', function () {
        class FakeClass
        {
            @required()
            public property: string;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "required", true);
    });

    it('should correctly add date rule', function () {
        class FakeClass
        {
            @date()
            public property: string;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "date", true);
    });

    it('should correctly add decimal rule', function () {
        class FakeClass
        {
            @decimal()
            public property: string;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "decimal", true);
    });

    it('should correctly add email rule', function () {
        class FakeClass
        {
            @email()
            public property: string;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "email", true);
    });

    it('should correctly add equal rule', function () {
        class FakeClass
        {
            @equal(10)
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "equal", 10);
    });

    it('should correctly add isoDate rule', function () {
        class FakeClass
        {
            @isoDate()
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "isoDate", true);
    });

    it('should correctly add maxLength rule', function () {
        class FakeClass
        {
            @maxLength(10)
            public property: string;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "maxLength", 10);
    });

    it('should correctly add maxValue rule', function () {
        class FakeClass
        {
            @maxValue(10)
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "maxValue", 10);
    });

    it('should correctly add minLength rule', function () {
        class FakeClass
        {
            @minLength(10)
            public property: string;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "minLength", 10);
    });

    it('should correctly add minValue rule', function () {
        class FakeClass
        {
            @minValue(10)
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "minValue", 10);
    });

    it('should correctly add notEqual rule', function () {
        class FakeClass
        {
            @notEqual(10)
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "notEqual", 10);
    });

    it('should correctly add number rule', function () {
        class FakeClass
        {
            @number()
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "number", true);
    });

    it('should correctly add regex rule', function () {
        class FakeClass
        {
            @regex(".*")
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "regex", ".*");
    });

    it('should correctly add step rule', function () {
        class FakeClass
        {
            @step(2)
            public property: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "step", 2);
    });

    it('should correctly add matches rule', function () {
        class FakeClass
        {
            @matches("property2")
            public property: number;
            public property2: number;
        }

        const ruleset = createRulesetFor(FakeClass);
        hasRule(ruleset, "matches", "property2");
    });
});