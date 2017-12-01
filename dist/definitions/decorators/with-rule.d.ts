import { AppliesIfFunction, MessageOverrideFunction } from "./method-types";
export declare function withRule(ruleName: string, ruleOptions?: any, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
