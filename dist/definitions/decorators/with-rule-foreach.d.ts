import { IModelResolver } from "treacherous";
export declare function withRuleForEach(ruleName: string, ruleOptions?: any, appliesIf?: (modelResolver: IModelResolver, value: any, ruleOptions?: any) => boolean | boolean, messageOverride?: (value: any, ruleOptions?: any) => string | string): (target: Object, propertyKey: string) => void;
