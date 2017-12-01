import { AppliesIfFunction, MessageOverrideFunction } from "./method-types";
export declare function withRuleForEach(ruleName: string, ruleOptions?: any, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
